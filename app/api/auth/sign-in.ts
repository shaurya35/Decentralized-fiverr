import { compare } from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isValid = await compare(password, user.passwordHash);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = sign(
    { id: user.id, email: user.email, isSeller: user.isSeller },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  };

  res.setHeader("Set-Cookie", serialize("authToken", token, cookieOptions));

  res.status(200).json({ message: "Sign-in successful", user });
}

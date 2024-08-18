"use client";

// link
import Link from "next/link";

//react form
import { useForm } from "react-hook-form";

//zod resolver
import { zodResolver } from "@hookform/resolvers/zod";

//account credentials validator
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";

//max width wrapper
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    //sending data to the server
    console.log("hi there");
  };

  return (
    <>
      <MaxWidthWrapper>
        <div className="container relative flex pt-28 flex-col items-center justify-center lg:px-0">
          <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[400px] border rounded-lg p-8 border-gray-300 shadow-2xl bg-white">
            <div className="flex flex-col items-center space-y-3 text-center">
              <h1 className="text-3xl font-bold text-gray-800">Create an account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="you@example.com"
                  className="mt-2 block w-full rounded-lg border border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 block w-full rounded-lg border border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3"
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
              <div className="text-center">
                <Link href="/sign-in" className="text-sm text-blue-600 hover:underline">
                  Already have an account? Sign-in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
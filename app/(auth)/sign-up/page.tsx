"use client";

// link
import Link from "next/link";

//react form
import { useForm } from "react-hook-form";

//zod resolver
import { zodResolver } from "@hookform/resolvers/zod";

//account cred validator
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
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] border-2 rounded-2xl p-5 border-gray-200 shadow-md">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-2xl font-bold">Create an account</h1>
            </div>
            <div className="">
              <form action="">
                <div className="">
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="">Email</label>
                    <input
                      {...register("email")}
                      type="text"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <label htmlFor="">Password</label>
                    <input
                      {...register("password")}
                      type="text"
                      placeholder="password"
                    />
                  </div>
                  <Link href="/sign-in">Already have an account? Sign-in</Link>
                  <button
                    className="text-lg font-semibold text-white border-2 rounded-lg bg-blue-600 py-2
            px-4"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;

"use client";
// link
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link href="/sign-in">Already have an account? Sign-in</Link>
          </div>
          <div className="grid gap-6">
            <form action="" >
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="you@example.com" />
                </div>
                <div className="grid gap-1 py-2">
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder="password" />
                </div>

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
    </>
  );
};

export default Page;

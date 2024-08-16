"use client";

// lucide icons
import { Search } from "lucide-react";

// link
import Link from "next/link";

const NavItems = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 h-full">
        <Search />
        <Link href="/login">
          <button
            className="text-md font-semibold text-white border-2 rounded-lg bg-blue-600 py-2
            px-4"
          >
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavItems;

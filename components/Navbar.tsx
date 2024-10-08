// max width wrapper
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// links
import Link from "next/link";

// components
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import NavItemsMobile from "./NavItemsMobile";

const Navbar = () => {
  return (
    <>
      <div className="bg-white sticky z-50 top-3 inset-x-0 h-16 ">
        <header className="relative bg-white">
          <MaxWidthWrapper>
            <div className="border-b border-gray-200 ">
              <div className="flex h-16 items-center justify-between">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Icons.logo />
                  </Link>
                </div>
                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                  <NavItems />
                </div>
                <div className="block lg:hidden ">
                  <NavItemsMobile />
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
    </>
  );
};

export default Navbar;

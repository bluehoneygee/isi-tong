import React from "react";
import NavLinks from "./navbar/NavLinks";
import Link from "next/link";
import { Button } from "../ui/button";
import ROUTES from "@/constants/route";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar bg-white dark:bg-[#0F1117] sticky left-0 top-0 h-screen flex flex-col justify-between border-r p-6 pt-30 max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-1 flex-col gap-2">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button
          asChild
          className="text-[12px] font-normal leading-[15.6px] bg-[#F4F6F8] dark:bg-[#212734] min-h-[41px] w-full  px-4 py-3 "
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="lg:hidden invert dark:invert-0 "
            />
            <span className="text-[#EFDD8D] max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          asChild
          className="text-[12px] font-medium leading-[15.6px] bg-[#DCE3F1] dark:bg-[#151821] text-[#212734] dark:text-[white] min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none "
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="account"
              width={20}
              height={20}
              className="lg:hidden invert dark:invert-0"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;

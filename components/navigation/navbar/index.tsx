import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-[#0f1117] fixed z-50 w-full p-6 sm:px-12 shadow-[#151821] dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/logo.svg" height={36} width={36} alt="isi tong logo" />
        <p className="h2-bold font-grotesk max-sm:hidden">Isi Tong</p>
      </Link>
      <p>Global Search</p>
      <div className="flex items-center justify-between gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert dark:invert-0 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-white dark:bg-[#0F1117] border-none p-4"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.svg" width={34} height={34} alt="logo" />
          <p className="h2-bold font-grotesk  ">
            Isi <span className="text-[#EFDD8D]">Tong</span>
          </p>
        </Link>
        <div className="flex h-[calc(100vh-80px)] flex-col justify between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="text-[12px] font-normal leading-[15.6px] bg-[#F4F6F8] dark:bg-[#212734] min-h-[41px] w-full  px-4 py-3 ">
                  <span className="text-[#EFDD8D]">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="text-[12px] font-medium leading-[15.6px] bg-[#DCE3F1] dark:bg-[#151821] text-[#212734] dark:text-[white] min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;

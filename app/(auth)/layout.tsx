import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" relative flex min-h-screen items-center justify-center  bg-[url('/background.jpg')] bg-cover bg-no-repeat bg-center px-4 py-10">
      <div className="absolute inset-0 bg-black/60"></div>

      <section className="relative bg-[#faf5ff] dark:bg-[#0f1117] min-w-full rounded-[10px] px-4 py-10 sm:px-8 sm:min-w-[520px]">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold">Isi Tong</h1>
            <p className="paragraph-regular text-[#858EAD]">
              Dari dapur ke tong, kelola rumah lebih bijak.
            </p>
          </div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;

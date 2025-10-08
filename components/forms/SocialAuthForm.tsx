"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import ROUTES from "@/constants/route";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "google" | "twitter") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5 ">
      <Button
        onClick={() => handleSignIn("google")}
        type="submit"
        className="dark:bg-[#212734] bg-white min-h-12 rounded-2xl dark:text-[#f4f6f8] text-[#0F1117]  w-full justify-center"
      >
        <Image
          src="/google.svg"
          alt="logo-google"
          width={20}
          height={20}
          className="object-contain mr-4 "
        />
        <span>Log in with Google</span>
      </Button>
      <Button
        onClick={() => handleSignIn("twitter")}
        className="flex-1  dark:bg-[#212734] bg-white min-h-12 rounded-2xl w-full justify-center dark:text-[#f4f6f8] text-[#0F1117]"
      >
        <Image
          src="/twitter-light.svg"
          alt="logo-twitter"
          width={20}
          height={20}
          className="object-contain mr-4 "
        />
        <span>Log in with Twitter</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

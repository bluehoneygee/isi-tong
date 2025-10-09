import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";
import React from "react";

const Home = async () => {
  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="text-[30px] font-bold leading-[42px] tracking-tighter">
          All Questions
        </h1>

        <Button className="bg-[#EFDD8D] min-h-[46px] px-4 py-3 " asChild>
          <Link href={ROUTES.ASK_QUESTIONS}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">LOCAL SEARCHBAR</section>
      HOME FILTER
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Question Card 1</p>
        <p>Question Card 1</p>
        <p>Question Card 1</p>
        <p>Question Card 1</p>
      </div>
    </>
  );
};

export default Home;

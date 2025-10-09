import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "Gimana sih cara milah sampah rumah tangga biar ga ribet?",
  },
  {
    _id: "2",
    title: "Kemasan sabun cair tuh masuknya plastik apa, ya?",
  },
  {
    _id: "3",
    title: "Kalau sisa minyak goreng, dibuangnya kemana biar ga nyumbat?",
  },
  {
    _id: "4",
    title: "Kalau sisa minyak goreng, dibuangnya kemana biar ga nyumbat?",
  },
  {
    _id: "5",
    title: "Kalau sisa minyak goreng, dibuangnya kemana biar ga nyumbat?",
  },
];

const popularTags = [
  { _id: "1", name: "sampah rumah tangga", questions: 130 },
  { _id: "2", name: "plastik kemasan", questions: 110 },
  { _id: "3", name: "bank sampah", questions: 95 },
  { _id: "4", name: "kompos", questions: 85 },
  { _id: "5", name: "tips hemat", questions: 70 },
];

const RightSidebar = () => {
  return (
    <section className="pt-30 custom-scrollbar bg-white dark:bg-[#0F1117] border-[#F4F6F8] dark:border-[#151821] sticky top-0 right-0 h-screen flex w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 max-xl:hidden">
      <div>
        <h3 className="text-[20px] font-bold leading-[26px] text-[#0F1117] dark:text-white">
          Top Questions
        </h3>
        <div className="mt-7 flex flex-col w-full gap-[36px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="text-[14px] font-medium leading-[18.2px] text-[#101012] dark:text-[#DCE3F1]">
                {title}
              </p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron"
                width={20}
                height={20}
                className="invert dark:invert-0"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-[20px] font-bold leading-[26px] text-[#0F1117] dark:text-white">
          Popular Tags
        </h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;

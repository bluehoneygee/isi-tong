import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "Kalau plastik kemasan detergen termasuk jenis apa ya?",
    description:
      "Aku mau setor ke bank sampah, tapi bingung plastik Rinso sama Sunlight itu jenisnya apa. Harus dipisah nggak sih, Bu?",
    tags: [
      { _id: "1", name: "plastik kemasan" },
      { _id: "2", name: "bank sampah" },
    ],
    author: {
      _id: "1",
      name: "Bu Rini",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    },
    upvotes: 23,
    answers: 7,
    views: 180,
    createdAt: new Date("2025-10-06"),
  },
  {
    _id: "2",
    title: "Sisa minyak goreng bisa dimanfaatin lagi nggak?",
    description:
      "Biasanya aku buang di wastafel, tapi katanya bisa nyumbat saluran air. Ada yang punya cara aman atau ide buat olah minyak jelantah?",
    tags: [
      { _id: "3", name: "minyak jelantah" },
      { _id: "4", name: "tips rumah tangga" },
    ],
    author: {
      _id: "2",
      name: "Bu Yanti",
      image:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    },
    upvotes: 35,
    answers: 12,
    views: 250,
    createdAt: new Date("2025-10-05"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

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
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;

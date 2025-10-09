import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <>
      <h1 className="text-[30px] font-bold leading-[42px] tracking-tighter text-[#000000] dark:text-[#FFFFFF]">
        Ask a Question
      </h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;

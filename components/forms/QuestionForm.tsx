"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {};

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-[16px] font-medium leading-[22.4px] text-[#212734] dark:text-[#dce3f1]">
                Question Title <span className="text-[#EFDD8D]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="text-[16px] font-normal leading-[22.4px] bg-[#DCE3F1] dark:bg-[#151821] text-[#151821] dark:text-[#DCE3F1] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 min-h-12"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-[14px] font-normal leading-[19.6px] text-[#7B8EC8]">
                Be specific and imagine you&apos;re asking a question to another
                person
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel className="text-[16px] font-medium leading-[22.4px] text-[#212734] dark:text-[#dce3f1]">
                Detailed explanation of your problem{" "}
                <span className="text-[#EFDD8D]">*</span>
              </FormLabel>
              <FormControl>EDITOR</FormControl>
              <FormDescription className="text-[14px] font-normal leading-[19.6px] text-[#7B8EC8]">
                Introduce the problem and expand on what you&apos;ve put in the
                title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full gap-3">
              <FormLabel className="text-[16px] font-medium leading-[22.4px] text-[#212734] dark:text-[#dce3f1]">
                Tags <span className="text-[#EFDD8D]">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="text-[16px] font-normal leading-[22.4px] bg-[#DCE3F1] dark:bg-[#151821] text-[#151821] dark:text-[#DCE3F1] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 min-h-12"
                    {...field}
                    placeholder="Add tags"
                  />
                  Tags
                </div>
              </FormControl>
              <FormDescription className="text-[14px] font-normal leading-[19.6px] text-[#7B8EC8]">
                Add up to 3 tags to describe what your question is about. You
                need to press enter to add a tag.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-16 flex justify-end">
          <Button type="submit" className="bg-[#EFDD8D] text-black w-fit">
            Ask A Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;

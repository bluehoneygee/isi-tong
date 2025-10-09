"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

const filters = [
  { name: "kompos", value: "kompos" },
  { name: "plastik", value: "plastik" },
  //   { name: "Newest", value: "newest" },
  //   { name: "Popular", value: "popular" },
  //   { name: "Unanswered", value: "unanswered" },
  //   { name: "Recommended", value: "recommended" },
];
const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleTypeClick = (filter: string) => {
    let newUrl = "";

    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          onClick={() => handleTypeClick(filter.value)}
          key={filter.name}
          className={cn(
            `text-[14px] font-medium leading-[18.2px] px-6 py-3 capitalize shadow-none`,
            active === filter.value
              ? "text-black bg-[#EFDD8D] hover:bg-[#EFDD8D] dark:text-[#EFDD8D] dark:bg-[#212734] dark:hover:bg-[#212734]"
              : "bg-[#F4F6F8] text-[#7B8EC8] hover:bg-[#F4F6F8] dark:bg-[#151821] dark:hover-[#151821]"
          )}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;

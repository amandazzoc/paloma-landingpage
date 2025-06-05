"use client";
import { useState } from "react";
import { faq } from "@/data/data";
import { CaretDown, CaretUp } from "phosphor-react";

export default function FaqContent() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col border border-[#D9D9D9] rounded-2xl">
      {faq.map((item) => (
        <div
          key={item.id}
          className={`px-9 ${item.id === faq[faq.length - 1].id ? "" : "border-b border-[#D9D9D9]"}`}
        >
          <button
            onClick={() => toggleFaq(item.id)}
            className="w-full text-left flex justify-between items-center py-4 "
          >
            <p className="md:text-xl text-[16px]"> {item.question}</p>
            <span className="text-3xl text-[var(--primary)]">
              {openId === item.id ? <CaretUp /> : <CaretDown />}
            </span>
          </button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              openId === item.id ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
          >
            <p className=" text-[#818181] md:text-xl text-[16px] py-4 border-t border-[#D9D9D9]">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

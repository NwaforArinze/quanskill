"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="divide-y divide-[#1A120D24]">
      {items.map((item, index) => {
        const open = active === index;

        return (
          <div key={index}>
            <button
              onClick={() => setActive(open ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="font-medium leading-[21.2px] text-xs uppercase tracking-[0.28px] text-[#1A120D]">
                {item.title}
              </span>

              {open ? (
                <Minus size={18} className="text-[#F89A17]" />
              ) : (
                <Plus size={18} className="text-[#F89A17]" />
              )}
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm text-[#1A120D]">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

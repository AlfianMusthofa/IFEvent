import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rounded-xl bg-white">
      <h2 className="tracking-wide font-medium mb-2">FAQ</h2>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const open = openId === faq.id;

          return (
            <div key={faq.id} className="overflow-hidden rounded-lg border">
              <button
                onClick={() => toggle(faq.id)}
                className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-gray-50"
              >
                <span className="text-[14px]">{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

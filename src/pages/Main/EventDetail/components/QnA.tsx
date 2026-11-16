import { useState } from "react";
import { Plus } from "lucide-react";

export type QnAItem = {
  id: string;
  question: string;
  answer: string;
};

const defaultItems: QnAItem[] = [
  {
    id: "certificate",
    question: "Apakah saya mendapatkan sertifikat?",
    answer:
      "Peserta yang mengikuti event hingga selesai akan mendapatkan e-certificate.",
  },
  {
    id: "recording",
    question: "Apakah tersedia rekaman event?",
    answer:
      "Jika rekaman tersedia, informasi dan tautan akses akan dikirimkan kepada peserta setelah event.",
  },
  {
    id: "attendance",
    question: "Bagaimana cara mengikuti event?",
    answer:
      "Informasi kehadiran atau tautan untuk mengikuti event akan dikirimkan setelah registrasi berhasil.",
  },
  {
    id: "refund",
    question: "Apakah tiket bisa di-refund?",
    answer:
      "Kebijakan refund mengikuti ketentuan yang ditetapkan oleh penyelenggara event.",
  },
];

type QnAProps = {
  items?: QnAItem[];
};

const QnA = ({ items = defaultItems }: QnAProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="rounded-xl mt-3 border border-yellow-primer bg-white p-4 shadow-md sm:p-5">
      <div className="mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-yellow-secondary">
          Need to know
        </p>
        <h2 className="mt-1 text-lg font-semibold tracking-wide text-gray-900">
          Questions &amp; Answers
        </h2>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const answerId = `qna-answer-${item.id}`;

          return (
            <div key={item.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                <span>{item.question}</span>
                <Plus
                  size={18}
                  className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                id={answerId}
                className={`grid transition-[grid-template-rows] duration-200 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 pr-8 text-sm leading-6 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QnA;

import { useParams } from "react-router-dom";
import { useEventDetail } from "../../hooks/useEventDetail";

const RegisterBtn = () => {
  const { slug } = useParams();
  const { handleJoin, joined, event } = useEventDetail(slug ?? "");

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID").format(number);
  };

  return (
    <div className="mt-3 px-4 py-3 flex items-center justify-between border rounded-[10px] bg-yellow-primer shadow-md">
      {event?.priceType == "free" ? (
        <h2 className="text-[16px] font-semibold tracking-wide">Free</h2>
      ) : (
        <h2 className="text-[15px] font-medium">
          IDR {formatRupiah(event?.price ?? 0)}
        </h2>
      )}

      <button
        onClick={handleJoin}
        disabled={joined}
        className={`px-7 py-2 rounded-[6px] transition
                  ${
                    joined
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black hover:opacity-90 text-white"
                  }
               `}
      >
        <h2 className="text-[15px] font-medium">
          {joined ? "Registered" : "Register Now"}
        </h2>
      </button>
    </div>
  );
};

export default RegisterBtn;

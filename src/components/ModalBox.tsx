import { X } from "lucide-react";

const ModalBox = ({ open, onClose, children }: any) => {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div
          className="bg-white w-[90%] max-w-2xl rounded-[10px] shadow-lg relative p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>

          {children}
        </div>
      </div>
    </>
  );
};

export default ModalBox;

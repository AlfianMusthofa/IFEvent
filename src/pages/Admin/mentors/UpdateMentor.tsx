import { X } from "lucide-react";

const UpdateMentor = ({ onClose }: any) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40">
          <div className="relative bg-white rounded-lg shadow-lg w-[600px] h-[500px] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
              <h2 className="text-[19px] font-medium">Update Mentor</h2>
              <button onClick={onClose}>
                <X onClick={onClose} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMentor;

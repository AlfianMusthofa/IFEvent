import { X } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const QrModal = ({ onClose, ticketCode }: any) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative bg-white rounded-lg shadow-lg flex flex-col">
          <div className="flex items-end p-4 border-b flex-shrink-0">
            {/* <h2 className="text-[19px] font-medium">Update User</h2> */}
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <div className="p-4">
            {ticketCode ? (
              <>
                <QRCodeCanvas value={ticketCode} size={200} />
              </>
            ) : (
              <p>No ticket</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QrModal;

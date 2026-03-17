import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { API_URL } from "../../../service/api";
import { toast } from "react-toastify";

type ScanResult = {
  success: boolean;
  message: string;
} | null;

const CheckInPage = () => {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [result, setResult] = useState<ScanResult>(null);
  const [loading, setLoading] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const html5QrCode = new Html5Qrcode("reader");
    scannerRef.current = html5QrCode;

    const toastId = toast.loading("Checking ticket...");

    html5QrCode
      .start(
        { facingMode: "user" },
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
          html5QrCode.pause();

          setLoading(true);

          try {
            const res = await fetch(`${API_URL}/events/checkin`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ticketCode: decodedText,
              }),
            });

            const data = await res.json();

            if (res.ok) {
              toast.update(toastId, {
                render: "Check-in berhasil",
                type: "success",
                isLoading: false,
                autoClose: 1000,
              });
            } else {
              toast.update(toastId, {
                render: data.message || "Check-in gagal",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
            }

            setResult({
              success: res.ok,
              message: data.message,
            });
          } catch {
            toast.update(toastId, {
              render: "Network error",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });

            setResult({
              success: false,
              message: "Network error",
            });
          }

          setLoading(false);

          setTimeout(() => {
            try {
              html5QrCode.resume();
            } catch {}
          }, 2000);
        },
        () => {},
      )
      .catch(console.error);

    return () => {
      if (html5QrCode?.isScanning) {
        html5QrCode.stop().catch(() => {});
      }
    };
  }, []);

  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Event Check-in</h1>

        {/* Scanner */}
        <div id="reader" className="w-full border rounded-lg overflow-hidden" />

        {/* Status */}
        <div className="mt-4 text-center">
          {loading && <p className="text-gray-500">Processing...</p>}

          {result && (
            <div
              className={`p-3 rounded-lg mt-2 ${
                result.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {result.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckInPage;

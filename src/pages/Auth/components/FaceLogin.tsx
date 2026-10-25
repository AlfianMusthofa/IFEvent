import { useEffect, useRef, useState } from "react";
import { Camera, ScanFace, X } from "lucide-react";

interface FaceLoginProps {
  onClose: () => void;
  onSuccess?: () => void;
}

const FaceLogin = ({ onClose, onSuccess }: FaceLoginProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraLoading, setCameraLoading] = useState(true);
  const [cameraError, setCameraError] = useState("");
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      setCameraLoading(true);
      setCameraError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: {
            ideal: 640,
          },
          height: {
            ideal: 480,
          },
        },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error(error);

      setCameraError(
        "Tidak dapat mengakses kamera. Pastikan permission kamera telah diberikan.",
      );
    } finally {
      setCameraLoading(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }
  };

  const handleScan = async () => {
    if (!videoRef.current) return;

    setScanning(true);

    try {
      // Nanti di sini kita capture frame
      // kemudian kirim ke backend / Python AI server.

      console.log("Scanning face...");

      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      console.log("Face scan selesai");

      // sementara
      // onSuccess?.();
    } catch (error) {
      console.error(error);
    } finally {
      setScanning(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Login dengan Wajah
              </h2>

              <p className="text-sm text-gray-500">
                Pastikan wajah terlihat jelas
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Camera */}
          <div className="p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
              {cameraLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
                  <Camera className="mb-3 h-10 w-10" />

                  <p className="text-sm">Membuka kamera...</p>
                </div>
              )}

              {cameraError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <Camera className="mb-3 h-10 w-10" />

                  <p className="text-sm">{cameraError}</p>

                  <button
                    onClick={startCamera}
                    className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900"
                  >
                    Coba Lagi
                  </button>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onLoadedData={() => {
                      setCameraLoading(false);
                    }}
                    className="h-full w-full object-cover"
                  />

                  {/* Face guide */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-56 w-44 rounded-[50%] border-2 border-white/80" />
                  </div>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/10" />
                </>
              )}
            </div>

            {/* Instruction */}
            <div className="mt-5 text-center">
              {scanning ? (
                <>
                  <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />

                  <p className="font-medium text-gray-900">
                    Memeriksa wajah...
                  </p>

                  <p className="mt-1 text-sm text-gray-500">Jangan bergerak</p>
                </>
              ) : (
                <>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <ScanFace size={20} />

                    <p className="font-medium text-gray-900">
                      Posisikan wajah di dalam lingkaran
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    Pastikan pencahayaan cukup dan wajah terlihat jelas.
                  </p>
                </>
              )}
            </div>

            {/* Scan button */}
            <button
              onClick={handleScan}
              disabled={cameraLoading || !!cameraError || scanning}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ScanFace size={20} />

              {scanning ? "Memeriksa..." : "Scan Wajah"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaceLogin;

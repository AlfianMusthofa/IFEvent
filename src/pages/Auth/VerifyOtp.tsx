import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useVerificationOtp } from "./hook/useVerificationOtp";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [countdown, setCountdown] = useState(59);
  const { state } = useLocation();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const { handleVerify, loading } = useVerificationOtp({
    name: state.name,
    email: state.email,
    password: state.password,
  });

  const handleResend = () => {
    console.log("resend");

    setCountdown(59);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-yellow-400 py-5">
          <h1 className="text-center text-2xl font-bold">
            Verify Your Account
          </h1>
        </div>

        <div className="p-8">
          <p className="text-center text-gray-600">
            Please enter the 5-digit verification code sent to your registered
            email.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="w-14 h-14 rounded-lg border text-center text-2xl font-bold focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center text-sm">
            <span className="text-gray-500">Resend OTP in {countdown}s</span>

            <button
              disabled={countdown > 0}
              onClick={handleResend}
              className="text-yellow-600 font-medium disabled:text-gray-400"
            >
              Resend Code
            </button>
          </div>

          <button
            onClick={() => handleVerify(otp.join(""))}
            disabled={loading}
            className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Loading..." : "Verify"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Need help?{" "}
            <a href="#" className="underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;

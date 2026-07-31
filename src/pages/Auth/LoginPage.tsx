import { useState } from "react";
import Google from "../../assets/icons/search.png";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="border w-[400px] bg-white">
          <h2 className="text-[23px] font-bold">
            Hello, <span className="font-normal">Welcome Back!</span>
          </h2>
          <p className="text-[14px] mt-1">we're happy to see you again.</p>
          <button className="py-2 my-4 border-b-yellow-primer border-b-4 flex items-center gap-2 border w-full justify-center rounded-[8px]">
            <img src={Google} alt="google" className="w-[18px]" />
            <p className="text-[14px] mt-[1px]">Continue with Google</p>
          </button>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-[13px] text-gray-400">Or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-gray-500">Email</span>
            <input
              type="email"
              className="border p-2 text-[15px] outline-none rounded-[8px] bg-gray-100"
            />
          </div>
          <div className="my-3"></div>
          <div className="flex flex-col gap-1">
            <span className="text-[13px] text-gray-500">Password</span>
            <input
              type="password"
              className="border p-2 text-[15px] outline-none rounded-[8px] bg-gray-100 "
            />
          </div>
          <div className="w-full flex justify-end items-end">
            <a href="#" className="text-[13px] tracking-wide mt-2 mb-4">
              Forgot Password?
            </a>
          </div>
          <button className="w-full tracking-wide text-center bg-yellow-primer rounded-[8px] text-[13px] py-2.5">
            LOGIN
          </button>
          <p className="text-center text-[13px] mt-4 text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-black font-medium">
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

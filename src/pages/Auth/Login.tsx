import Logo from "../../assets/icons/logo.png";
import Person from "../../assets/icons/profile.png";
import Lock from "../../assets/icons/padlock.png";
import { useState } from "react";
import { useLogin } from "./hook/useLogin";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const { handleLogin, loading } = useLogin(form);

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <form
          method="POST"
          className="border p-[17px] flex flex-col items-center shadow-md"
        >
          <img src={Logo} className="w-[60px]" />
          <div className="text-center mt-[13px]">
            <p className="font-semibold text-[18px]">Welcome Back</p>
            <p className="text-[13px] mt-[3px]">
              Dont have an account?{" "}
              <a href="/register" className="font-medium">
                Sign Up
              </a>
            </p>
          </div>
          <form
            action=""
            method="get"
            className="mt-[20px] flex flex-col gap-[13px]"
          >
            <div className="border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow">
              <img src={Person} className="w-[25px]" />
              <input
                type="text"
                name="Email"
                id="Email"
                className="w-full text-[15px] outline-none"
                placeholder="Email"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow">
              <img src={Lock} className="w-[22px]" />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full text-[15px] outline-none"
                placeholder="Password"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <button
              type="submit"
              onClick={handleLogin}
              disabled={loading}
              className="bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </form>
      </div>
    </>
  );
};

export default Login;

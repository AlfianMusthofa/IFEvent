import Logo from "../../assets/icons/logo.png";
import Person from "../../assets/icons/profile.png";
import Lock from "../../assets/icons/padlock.png";
import Email from "../../assets/icons/email.png";
import { useState } from "react";
import { useRegister } from "./hook/useRegister";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { handleRegister, loading } = useRegister(form);

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="border p-[17px] flex flex-col items-center shadow-md">
          <img src={Logo} className="w-[60px]" />
          <div className="text-center mt-[13px]">
            <p className="font-semibold text-[18px]">Hello</p>
            <p className="text-[13px] mt-[3px]">
              Have an account?{" "}
              <a href="/login" className="font-medium">
                Log In
              </a>
            </p>
          </div>
          <div className="mt-[20px] flex flex-col gap-[13px]">
            <div className="border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow">
              <img src={Person} className="w-[25px]" />
              <input
                type="text"
                name="username"
                id="username"
                className="w-full text-[15px] outline-none"
                placeholder="Username"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow">
              <img src={Email} className="w-[22px]" />
              <input
                name="phone"
                id="phone"
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
              onClick={handleRegister}
              disabled={loading}
              className="bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]"
            >
              {loading ? "Loading.." : "Register"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

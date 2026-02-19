import Logo from "../../assets/icons/logo.png";
import Person from "../../assets/icons/profile.png";
import Lock from "../../assets/icons/padlock.png";
import Email from "../../assets/icons/email.png";
import { useState } from "react";
import { API_URL } from "../../service/api";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        toast.success("Register berhasil!", {
          position: "top-right",
          autoClose: 2000,
          transition: Bounce,
        });
      }

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.warning("Register failed!", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });
    }
  };

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
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="border flex w-[310px] gap-2 p-[7px] rounded-[5px] border-yellow">
              <img src={Email} className="w-[22px]" />
              <input
                name="phone"
                id="phone"
                className="w-full text-[15px] outline-none"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleRegister}
              className="bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

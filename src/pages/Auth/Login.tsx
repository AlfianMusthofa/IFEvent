import Logo from "../../assets/icons/logo.png";
import Person from "../../assets/icons/profile.png";
import Lock from "../../assets/icons/padlock.png";
import InformationBtn from "../../assets/icons/information-button.png";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../service/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login Failed");
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
        }),
      );

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      toast.success("Login berhasil!", {
        position: "top-right",
        autoClose: 2000,
        transition: Bounce,
      });

      navigate("/");
    } catch (error) {
      console.error("Terjadi kesalahan jaringan:", error);
      toast.warning("Invalid email or password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

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
              type="submit"
              onClick={handleLogin}
              className="bg-yellow-primer text-[14px] text-white py-[8px] rounded-[5px]"
            >
              Login
            </button>
          </form>
          {/* <div className="mt-[15px]">
            <div className="flex items-center gap-[10px]">
              <img src={InformationBtn} className="w-[16px]" />
              <p className="text-[13px]">Students use the SALAM account</p>
            </div>
            <div className="flex items-center gap-[10px] mt-[8px]">
              <img src={InformationBtn} className="w-[16px]" />
              <p className="text-[13px]">
                Admin login{" "}
                <a href="/admin-login" className="underline">
                  here
                </a>
              </p>
            </div>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;

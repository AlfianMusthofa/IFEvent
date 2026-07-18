import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="max-w-[1200px] mx-auto heroContent p-[15px] gap-[13px]">
          <h1 className="text-[46px] font-semibold text-white tracking-[1px]">
            <Typewriter words={["Welcome to ElevateHub!"]} cursor />
          </h1>
          <div className="py-[3px] px-[10px] bg-yellow-primer">
            <p className="font-semibold text-black tracking-[2px]">
              Knowledge and Skills Increase, Career and Business Soar
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

const Stats = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-yellow-light gap-[40px] py-[35px]">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">350+</h3>
          <p className="font-semibold text-black">Participants</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">50+</h3>
          <p className="font-semibold text-black">Mentors</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-semibold text-black">10+</h3>
          <p className="font-semibold text-black">Event are held</p>
        </div>
      </div>
    </>
  );
};

export default Stats;

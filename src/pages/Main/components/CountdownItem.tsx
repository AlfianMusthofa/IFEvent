const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center w-[66px] h-[66px] rounded-[8px] bg-gray-100">
    <span className="text-[19px] font-bold">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[13px] text-gray-500">{label}</span>
  </div>
);
export default CountdownItem;

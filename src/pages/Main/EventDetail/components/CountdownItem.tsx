type CountdownItemProps = {
  value: number;
  label: string;
};

const CountdownItem = ({ value, label }: CountdownItemProps) => (
  <div className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-gray-200/80 bg-gray-50 px-1 py-2.5 sm:py-3">
    <span className="text-xl font-semibold tabular-nums leading-none text-gray-900 sm:text-2xl">
      {String(value).padStart(2, "0")}
    </span>
    <span className="mt-1.5 text-[9px] font-medium uppercase tracking-wider text-gray-500 sm:text-[10px]">
      {label}
    </span>
  </div>
);

export default CountdownItem;

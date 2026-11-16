interface TitleProps {
  title: string | null;
  category: string | null;
}

const Title = ({ title, category }: TitleProps) => {
  return (
    <div className="border p-3 rounded-[10px]  border-yellow-primer shadow-md">
      <p className="text-[12px] tracking-wide bg-yellow-primer w-fit px-3 py-1 rounded-full">
        {category}
      </p>
      <h1 className="text-[25px] font-medium tracking-wide line-clamp-2 mt-2">
        {title}
      </h1>
    </div>
  );
};

export default Title;

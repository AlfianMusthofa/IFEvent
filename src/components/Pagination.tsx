interface PaginationProps {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ page, totalPages, onPrev, onNext }: PaginationProps) => {
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="text-[14px]">
      <div className="flex bg-white items-center rounded-[5px] w-fit overflow-hidden border">
        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={page === 1}
          className="px-4 py-2 border-r hover:bg-gray-100 disabled:opacity-40"
        >
          Prev
        </button>

        {/* Page Info */}
        <div className="px-6 py-2">
          {formatNumber(page)} - {formatNumber(totalPages)}
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={page === totalPages}
          className="px-4 py-2 border-l hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

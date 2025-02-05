interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
   return (
      <div className="join flex gap-5 mt-4 items-center">
         <button
            className="w-[25px] h-[25px] border border-black flex items-center justify-center"
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
         >
            «
         </button>
         <span className='text-[13px]'>{currentPage}</span>
         <button
            className="w-[25px] h-[25px] border border-black flex items-center justify-center"
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
         >
            »
         </button>
      </div>
   )
}

export default Pagination
import Avata2 from "../../../assets/about-image.jpg";
import Pagination from "../../../components/Pagination";
import { formatCommentTime } from "../../../utils/date";
import { useComments } from "./hooks/useComments";

const CommentsDash = () => {
  const { comments, page, totalPages, getComments } = useComments(5);

  const handlePrev = () => {
    if (page > 1) getComments(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) getComments(page + 1);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-white py-3 px-5 border-b">
        <h1 className="text-[20px] font-medium">Comments Management</h1>
        <button className="bg-gradient-to-r from-[#EC5B13] to-[#CF4D58] px-3 py-2 rounded-[5px] cursor-pointer shadow-sm">
          <p className="text-[12px] text-white">Add Internal Note +</p>
        </button>
      </div>
      <div className="p-5">
        <div className="bg-white p-4 rounded-[5px]">
          <h1 className="font-medium tracking-wide">Active Discussions</h1>
          <div className="border h-px my-3"></div>
          <div className="content">
            {comments.map((comment) => (
              <div className="card-comment flex gap-4 mt-7">
                <img
                  src={Avata2}
                  className="w-[50px] h-[50px] object-cover rounded-xl"
                />
                {/* METADATA */}
                <div className="w-full">
                  <div className="personal-information">
                    <div className="name flex items-center gap-3">
                      <p className="font-medium tracking-wide">
                        {comment.User.name}
                      </p>
                      <p className="text-[12px]">
                        {formatCommentTime(comment.createdAt)}
                      </p>
                    </div>
                    <p className="article-name text-[11px] text-blue">
                      Article: {comment.Article.title}
                    </p>
                  </div>
                  <p className="text-[14px] mt-2">{comment.content}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <button className="text-[13px] text-red-400 font-semibold">
                      Reply
                    </button>
                    <button className="text-[13px]">Approval</button>
                    <button className="text-[13px]">Delete</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6 flex justify-center">
              <Pagination
                onNext={handleNext}
                onPrev={handlePrev}
                page={page}
                totalPages={totalPages}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsDash;

import React from "react";
import { Link } from "react-router-dom";
import { formatEventDate } from "../../utils/date";

interface CardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  startAt: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  slug,
  image,
  startAt,
}) => {
  return (
    <>
      <div className="p-[10px] rounded-[5px] max-w-[235px] shadow-md border">
        <img
          src={image}
          className="w-full h-[125px] object-cover rounded-[5px]"
          loading="lazy"
        />
        <div className="content pt-[10px]">
          <p className="line-clamp-1 text-[15px] font-medium">{title}</p>

          <p className="text-[11px] text-lighter-grey-grey ">
            {formatEventDate(startAt)} WIB
          </p>
          <p
            className="line-clamp-2 text-[12px] mt-[7px] text-light-grey"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <Link
            to={`/events/${slug}`}
            className="bg-yellow-primer rounded-[5px] text-[12px] flex justify-center py-[7px] mt-[7px]"
          >
            More Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

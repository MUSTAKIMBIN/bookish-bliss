import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleBookCard = ({ book }) => {
  const { image, bookName, tags, author, category, rating } = book;
  return (
    <div>
      <Link to='/bookDetail'>
      <div className="border rounded-xl p-4 shadow-sm shadow-[#49108bb9]">
        <div className="bg-[#F3F8FF] p-2 rounded-lg">
          <img className="h-52 mx-auto rounded-sm" src={image} alt="" />
        </div>
        <div className="py-4 border-b-[2px] border-dashed">
          <div className="flex justify-between items-center my-2">
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              {tags[0]}
            </p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              {tags[1]}
            </p>
          </div>
          <h3 className="my-4 text-2xl font-bold">{bookName}</h3>
          <h5 className="text-lg font-semibold">By: {author}</h5>
        </div>
        <div className="py-2 flex justify-between">
          <p className="text-md font-semibold">{category}</p>
          <div className="flex items-center">
            <p className="text-md font-semibold">{rating}</p>
            <CiStar className="text-xl font-semibold" />
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

SingleBookCard.propTypes = {
  book: PropTypes.object,
};

export default SingleBookCard;

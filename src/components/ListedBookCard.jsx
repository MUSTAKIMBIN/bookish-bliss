import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {
  return (
    <div className="mb-5 flex flex-col md:flex-row gap-5 p-2 md:p-6 border border-purple-100 shadow-sm shadow-[#8400519f] rounded-xl">
      <div className="md:w-1/3 bg-[#e1ecfc] rounded-xl p-2">
        <img className="w-28 md:w-44 mx-auto rounded-md" src={book.image} alt="" />
      </div>
      <div className="md:w-2/3">
        <div>
          <h2 className="text-2xl font-bold">{book.bookName}</h2>
          <h3 className="py-1 text-xl font-semibold">By : {book.author}</h3>
        </div>
        <div>
          <div className="py-3 flex flex-shrink justify-between items-center my-2">
            <p className="font-bold">Tag: </p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{book.tags[0]}
            </p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{book.tags[1]}
            </p>
            <p className="hidden md:block text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{book?.tags[2]}
            </p>
          </div>
          <div>
            <p className="text-base text-gray-500 flex items-center gap-2"><CiLocationOn></CiLocationOn> Year of Publishing: {book.yearOfPublishing}</p>
          </div>
        </div>
        <div className="py-4 border-b-2 text-base text-gray-500 flex items-center gap-8" >
            <p className="flex items-center gap-2"><FaRegUser></FaRegUser> Publisher : {book.publisher}</p>
            <p className="flex items-center gap-2"><MdContactPage></MdContactPage> Page : {book.totalPages}</p>
        </div>
        <div className="flex justify-between py-5 items-center">
            <p className="py-1 px-2 md:py-2 md:px-4 rounded-2xl bg-lime-200 font-semibold text-sm">Category : {book.category}</p>
            <p className="py-1 px-2 md:py-2 md:px-4 rounded-2xl bg-purple-200 font-semibold text-sm">Rating : {book.rating}</p>
            <Link to={`/bookDetail/${book.bookId}`}>
                <button className="py-2 px-4 border border-pink-400 rounded-2xl bg-pink-200 font-semibold text-sm">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

ListedBookCard.propTypes = {
  book: PropTypes.object,
};
export default ListedBookCard;

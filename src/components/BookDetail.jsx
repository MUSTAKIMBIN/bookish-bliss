import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
  saveWishBookToLocalStorage,
} from "./localStorage";

const BookDetail = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const intBookId = parseInt(bookId);
  const singleBook = books.find((book) => book.bookId === intBookId);

  const handleReadBook = () => {
    saveDataToLocalStorage(singleBook);
    const checkedData = getDataFromLocalStorage(singleBook);
    const isExsist = checkedData.find(data => data.bookId === singleBook.bookId)
    // console.log(isExsist)
    if(isExsist){
      toast.success("Book added to read");
    }else{
      toast.warn("This book is allready added ")
    }
   
    document.getElementById("wishBtn").disabled = true;
  };
  const handleWishBook = () => {
    saveWishBookToLocalStorage(singleBook);
    toast.warn("Book added to wishlst");
  };
  return (
    <div className="my-8 flex flex-col md:flex-row w-4/5 mx-auto md:gap-10">
      <ToastContainer />
      <div className="md:w-1/3 bg-[#F3F8FF] rounded-lg flex items-center justify-center">
        <img className="shadow-lg" src={singleBook.image} alt="" />
      </div>
      <div className="md:w-2/3">
        <div className="pb-5 border-b-2 space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            {singleBook.bookName}
          </h2>
          <h4 className="text-lg md:text-xl font-bold">
            By: {singleBook.author}
          </h4>
        </div>
        <div className="py-3 border-b-2">
          <h5 className="text-base md:text-lg font-semibold">
            {singleBook.category}
          </h5>
        </div>
        <div className="py-4">
          <p className="text-xs text-gray-500">
            <span className="font-bold text-sm text-black">Review :</span>{" "}
            {singleBook.review}
          </p>
        </div>
        <div className="pb-4 border-b-2">
          <div className="flex justify-between items-center my-2">
            <p className="font-bold">Tag:</p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{singleBook.tags[0]}
            </p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{singleBook.tags[1]}
            </p>
            <p className="text-sm font-semibold border border-[#F3F8FF] rounded-2xl px-3 py-1 bg-[#F3F8FF]">
              #{singleBook?.tags[2]}
            </p>
          </div>
        </div>
        <div className="py-4 space-y-2">
          <p className="text-gray-500 text-sm font-semibold">
            Number of page :{" "}
            <span className="text-black">{singleBook.totalPages}</span>
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            Publisher :{" "}
            <span className="text-black">{singleBook.publisher}</span>
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            Year of Publishing :{" "}
            <span className="text-black">{singleBook.yearOfPublishing}</span>
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            Rating : <span className="text-black">{singleBook.rating}</span>
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleReadBook()}
            className="btn bg-[#7E30E1] text-white hover:bg-white hover:text-[#7E30E1] border hover:border-[#7E30E1]"
          >
            Read
          </button>
          <button
            id="wishBtn"
            onClick={handleWishBook}
            className="btn bg-[#E26EE5] text-white hover:bg-white hover:text-[#E26EE5] border hover:border-[#E26EE5]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

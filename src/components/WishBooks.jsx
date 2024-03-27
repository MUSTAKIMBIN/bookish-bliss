import { useEffect, useState } from "react";
import { getWishBookFromLocalStorage } from "./localStorage";
import ListedBookCard from "./ListedBookCard";


const WishBooks = () => {
    const [wishBook, setWishBook]=useState([])
    useEffect(()=>{
        const data = getWishBookFromLocalStorage()
        setWishBook(data)
    },[])
    return (
        <div>
            {
                wishBook?.map(book => <ListedBookCard key={book.bookId}
                book={book}></ListedBookCard>)
            }
        </div>
    );
};

export default WishBooks;
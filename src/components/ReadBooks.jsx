import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "./localStorage";
import ListedBookCard from "./ListedBookCard";


const ReadBooks = () => {
    const [readBooks, setReadBooks]=useState([])
    console.log(readBooks)
    useEffect(()=>{
        const data= getDataFromLocalStorage()
        setReadBooks(data)
    },[])
    return (
        <div>
            {
                readBooks?.map(book => <ListedBookCard key={book.bookId}
                    book={book}></ListedBookCard>)
            }
        </div>
    );
};

export default ReadBooks;
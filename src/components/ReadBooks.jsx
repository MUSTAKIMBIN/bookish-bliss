import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "./localStorage";


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
                readBooks.map(book => <h1 className="text-2xl font-bold" key={book.bookId}>{book.bookName}</h1>)
            }
        </div>
    );
};

export default ReadBooks;
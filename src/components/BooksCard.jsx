import { useEffect, useState } from "react";
import SingleBookCard from "./SingleBookCard";


const BooksCard = () => {
    const [books, setBooks]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data=>setBooks(data))
    },[])
    console.log(books)
    return (
        <div className="w-4/5 mx-auto my-16">
            <h2 className="text-center text-3xl font-bold my-5">Books</h2>
            <div className="grid md:grid-cols-3 gap-4 my-10">
                {
                    books.map(book=> <SingleBookCard key={book.bookId} book={book}></SingleBookCard>)
                }
            </div>
        </div>
    );
};

export default BooksCard;
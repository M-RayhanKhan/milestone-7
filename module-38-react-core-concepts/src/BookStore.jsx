import Book from "./Books";

export default function BookStore({books}){
    console.log(books);
    return(
        <div>
            <h4>BookStore: {books.length}</h4>
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
        </div>
    )
}
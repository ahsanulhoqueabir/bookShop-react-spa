import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingPage from "./LoadingPage";

const Books = () => {
    const {books,total} = useLoaderData()
    const state = useNavigation()
    if(state.state==='loading')
    {
        return <LoadingPage/>;
    }
    return (
        <div className="my-10 px-3 lg:px-10 text-black">
           <h1 className="font-bold text-center"> Total Available Books: {total}</h1>
           <div className="grid md:grid-cols-4 lg:grid-col-4 gap-4 pt-10">
            {
                books.map(book => <Book 
                    key={book.isbn13}
                    book={book}
                ></Book>)
            }
           </div>
        </div>
    );
};

export default Books;
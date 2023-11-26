import { Link } from "react-router-dom";

const Book = ({book}) => {
    // console.log(book);
    const {title,subtitle,isbn13,price,image,url} = book;
    return (
        <Link to={`${isbn13}`}>
        <div className="relative h-full w-full bg-blue-100 rounded overflow-hidden">
            <img className="object-cover" src={image} alt="" />
            <div className="absolute bg-slate-600 bg-opacity-90 opacity-0 hover:opacity-100 px-5 pt-5 flex flex-col inset-0">
                <h1 className="text-lg font-bold">{title}</h1>
                <p className=" font-normal text-md py-5">{subtitle? subtitle : 'No Data'} </p>
                <p className="mt-auto pb-5">Price: {price} </p>
            </div>
        </div>
        </Link>
    );
};

export default Book;
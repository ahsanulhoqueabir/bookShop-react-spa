import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const BookDetails = () => {
    const state = useNavigation()
    if(state.state==='loading')
    {
        return <LoadingPage/>;
    }
    const {image,title,authors,publisher,year,rating,desc,url,price} = useLoaderData()
    // console.log(bookDetails);
    const [curtail,setCurtail] = useState(true)
    return (
        <div className="border-2 p-10 my-10 bg-blue-50 flex-col lg:flex-row flex gap-3 lg:gap-10 items-center w-full lg:w-[75%] m-auto">
            <div className="h-full w-full">
                <img 
                src={image}
                className="h-[100%]" 
                alt="" />
            </div>
            <div className="flex gap-5 flex-col w-full">
            <div className="badge bg-amber-400">Brand New</div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div>
            <p className="text-lg">Authors: {authors} </p>
            <p className="text-lg">Publisher: {publisher}</p>
            <p className="text-lg">Year: {year} </p>
            <p className="text-lg">Rating: {rating}</p>
            </div>
            <div>

                {
                    curtail? 
                    <> 
                    <p> {desc.slice(0,100)} ..... <span className="cursor-pointer text-teal-700" onClick={()=>{setCurtail(!curtail)}}>Read More</span> </p>
                    </> 
                    : <> 
                    <p>{desc} <span className="text-red-700 cursor-pointer" onClick={()=>setCurtail(!curtail)}>Show Less</span></p>
                    </>
                }
                <div className="py-5 flex gap-5 items-center">
                    <Link to={url} className="btn bg-green-300">Buy Now <ShoppingBagIcon className="h-4"></ShoppingBagIcon> </Link>
                    <span>Price: {price} </span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;
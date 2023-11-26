import { ShoppingCartIcon} from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import animat from '../assets/home.json';
import { Link, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";
const Home = () => {
    const state = useNavigation()
    // console.log(state.state);
    if(state.state==='loading')
    {
        return <LoadingPage/>;
    }
  return (
    <div className="my-10 lg:px-10 text-black flex flex-col-reverse gap-3 px-5 lg:flex-row items-center">
        {/* left part of this container  */}
      <div className="w-full">
        <span class="badge bg-amber-400 text-black">ON SALE!</span>
        <h1 className="py-4 text-5xl font-semibold">
          A reader lives a thousand lives{" "}
          <span className=" text-teal-500">before he dies</span>
        </h1>
        <p className="text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="pt-7 flex gap-3 items-center">
          <Link to='/books' className="btn bg-blue-100 text-black hover:bg-slate-400 ">
            Visit Store <ShoppingCartIcon className="h-6 w-6 text-black" />
          </Link>
          <Link to='/about'>Learn More</Link>
        </div>
      </div>
      {/* right part of the container  */}
      <div className="w-full">
            <Lottie animationData={animat}></Lottie>
      </div>
    </div>
  );
};

export default Home;

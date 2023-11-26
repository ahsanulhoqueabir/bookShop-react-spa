import { BoltIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    return (
        <div className="bg-blue-50 text-black flex flex-col gap-4 lg:flex-row justify-between items-center py-5 lg:px-8">
            <div >
                <Link className='flex items-center gap-1' to="/"><BoltIcon className='h-8 w-8 text-blue-400'/>  <span className='font-bold text-2xl'>BookShop</span> </Link>
            </div>
            <div className=''>
            <div className=' flex gap-3 text-xl'>
                <NavLink to="/" title='home' className={({isActive})=>(isActive && 'text-blue-500')}>Home</NavLink>
                <NavLink to="/books" title='Books' className={({isActive})=>(isActive && 'text-blue-500')}>Books</NavLink>
                <NavLink to="/About" title='About' className={({isActive})=>(isActive && 'text-blue-500')}>About us</NavLink>
            </div>
            </div>
            
            </div>
    );
};

export default Header;
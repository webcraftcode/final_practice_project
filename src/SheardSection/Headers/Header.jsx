import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaCartPlus, FaUserAlt} from 'react-icons/fa';


const Header = () => {

    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar bg-black  text-white py-4 px-2">
            <div className="flex-1 items-center">
                <div>
                <a className="btn btn-ghost normal-case text-xl">
                <span className='font-bold'>
                BISTRO BOSS
                 <br />Restaurant</span>
                </a>
                </div>
            </div>
            <div className="flex-none ">
                <button className="menu-toggle  md:hidden" onClick={toggleMenu}>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                </button>
                {isMenuOpen && (
                    <ul className="menu menu-horizontal px-1 font-semibold text-md">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/contact_us'>CONTACT US</Link></li>
                        <li><Link to='/Dashboard'>DASHBOARD</Link></li>
                        <li><Link to='/our_menu'>OUR MENU</Link></li>
                        <li><Link to='/our_shop'>OUR SHOP</Link></li>

                        <span className='text-3xl mt-2 relative'>
                            <FaCartPlus className='absolute mr-5'></FaCartPlus>
                            <sub className=' absolute z-10 top-0 text-sm text-center w-[20px] h-[20px] mt-5 ml-4 bg-red-700  rounded-full'>1</sub>
                            </span>
                        <li className='ml-10'><Link>SIGN OUT</Link></li>
                        <span className='text-2xl mt-3'><FaUserAlt></FaUserAlt></span>
                             
                       

                    </ul>
                )}
                
               
            </div>
        </div>
    );
};

export default Header;
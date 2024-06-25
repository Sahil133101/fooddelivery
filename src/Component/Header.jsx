import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assests/logo.png';
import { MdShoppingBasket, MdAdd,MdLogout } from "react-icons/md";
import Avtar from '../Assests/avatar.png';
import { motion } from "framer-motion"; 
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from '../Context/StateProvider';
import { actionType } from '../Context/Reducer';

export const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{ user }, dispatch] = useStateValue();

    const login = async () => {
        if(!user){
        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
         dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
        localStorage.setItem('user', JSON.stringify(providerData[0]));
        }
    };

    return (
        <header className='fixed z-50 w-full p-6 px-16 bg-primary'>
            {/* Desktop */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <Link to={"/ "} className='flex items-center gap-2'>
                    <img src={logo} className='w-8 object-cover' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                
                <div className='flex items-center'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            Home
                        </li>
                        <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            Menu
                        </li>
                        <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            About Us
                        </li>
                        <li className='text-base text-textcolor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                            Service
                        </li>
                    </ul>

                    <div className='relative flex items-center justify-center ml-8'>
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
                        <div className='absolute -top-4 -right-1 w-5 h-5 rounded-full bg-cartNumfig flex items-center justify-center'>
                            <p className='text-sm text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avtar} 
                            className='w-10 h-10 rounded-full ml-6 cursor-pointer drop-shadow-xl' 
                            alt="user profile" 
                            onClick={login} 
                        />
                        <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
                            {
                                user && user.email === "sahilnakulish143@gmail.com" && (
                                    <Link to ={"/createItem"}>
                                    
<p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textcolor text-base'> New Item <MdAdd /> </p>
                            </Link>    
                            )
                            }
                            
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textcolor text-base' > LogOut <MdLogout /></p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex md:hidden w-full h-full'>
                {/* Mobile view content */}
                hii
            </div>
        </header>
    );
}
 
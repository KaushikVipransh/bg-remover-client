import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const{openSignIn, openSignUp} = useClerk();
    const {user} = useUser();

    const openRegister =() =>{
        setMenuOpen(false);
        openSignUp({});
    }

    const openLogin = () =>{
        setMenuOpen(false);
        openSignIn({});
    }

    return(
        <nav className = "bg-white px-8 py-4 flex justify-between items-center">

            <Link className= "flex items-center space-x-2" to ="/" >
                <img src={assets.logo} alt="logo" className= "w-8 h-8 object-contain cursor-pointer"/>
                <span className= "text-2xl font-semibold text-indigo-700 cursor-pointer">
                    bg.<span className= "text-gray-400 cursor-pointer">remover</span>
                </span>
            </Link>

            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all" onClick={openRegister}>
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                Credits:0
                            </p>
                        </button>
                        <p className="text-gray-600 max-sm:hidden">
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton />
                </SignedIn>
            </div>

            {/* mobile view */}
            <div className= "flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 w-40 p-4">
                    <SignedOut>
                        <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
                            Login
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center" onClick={openRegister}>
                            Sign up
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                                <p className="text-xs sm:text-sm font-medium text-gray-600">
                                    Credits:0
                                </p>
                            </button>
                        </div>
                        <UserButton />
                    </SignedIn>
                </div>
            )}


        </nav>
    )
}

export default Menubar;
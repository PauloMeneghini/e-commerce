"use client"
import React from "react";

const Navbar = () => {

    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click)

    return (
        <>
            <nav className="bg-[#6319C4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-30">
                        <div>
                            <a href="https://www.google.com" className="text-white">
                                <img src="/imagens/logo.png" width="200"/>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-[#F5A53B] hover:text-white rounded-md p-2"> Home </a>
                                <a href="/" className="text-white hover:bg-[#F5A53B] hover:text-white rounded-md p-2"> About </a>
                                <a href="/" className="text-white hover:bg-[#F5A53B] hover:text-white rounded-md p-2"> Services </a>
                                <a href="/" className="text-white hover:bg-[#F5A53B] hover:text-white rounded-md p-2"> Contact </a>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2
                            rounded-md text-white hover:text-white focus:outline-none focus:ring-2
                            focus:ring-inset focus:ring-white" onClick={handleClick}>
                                {click ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path 
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2} 
                                            d="M6 18L18 6M6 6l12 12" 
                                        />
                                    </svg>
                                            
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path 
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2} 
                                            d="M4 6h16M4 12h16m-7 6h7" 
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {click && (
                    <div className="md:hidden h-screen">
                        <a href="/" className="text-white text-center block hover:bg-[#F5A53B] hover:text-white py-7"> Home </a>
                        <a href="/" className="text-white text-center block hover:bg-[#F5A53B] hover:text-white py-7"> About </a>
                        <a href="/" className="text-white text-center block hover:bg-[#F5A53B] hover:text-white py-7"> Services </a>
                        <a href="/" className="text-white text-center block hover:bg-[#F5A53B] hover:text-white py-7"> Contact </a>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
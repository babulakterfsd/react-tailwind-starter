/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="main-container lg:mt-6 lg:px-3">
            <nav className="bg-reddishYellow py-2 px-4 lg:bg-transparent">
                <div className="flex flex-wrap justify-between items-center">
                    <button type="button" onClick={() => navigate('/')} className="flex">
                        <span className="text-2xl text-bold">Crypto</span>
                    </button>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            className="primary-btn mr-2"
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </button>
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="NavBarId"
                            type="button"
                            className="inline-flex items-center p-2 text-base  text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full lg:block md:w-auto" id="NavBarId">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 text-base md:text-xl  text-offWhite">
                            <li className="hover:text-reddishYellow">About</li>
                            <li className="hover:text-reddishYellow">Security</li>
                            <li className="hover:text-reddishYellow">Contact</li>
                        </ul>
                    </div>
                </div>
                {/* mobile */}
                <div className="w-full md:w-auto block lg:hidden">
                    <ul
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white space-y-4`}
                    >
                        <li
                            className="mt-6"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Security
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

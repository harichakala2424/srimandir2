import React from "react";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { PiNoteBold } from "react-icons/pi";
import mail from "../assets/ic_action_help_mail.svg"
import watsapp from "../assets/ic_action_help_whats_app.svg"
import logo from "../assets/ic_mandir_darshan.svg"

const Navbar = () => {
    const [state, setstate] = useState(false);
    const [mobilestate, setmobilestate] = useState(false);

    return (
        <div class="min-h-full" >
            <nav class="fixed h-16 bg-white top-0 left-0 w-full z-50">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <div
                                class="flex hover:cursor-pointer"
                            >
                                <img class="h-18 w-18 mx-2 px-2" src={logo} alt="Your Company" />
                                <span class="font-bold mt-2 text-lg">Sri Mandir</span>
                            </div>
                            <div class="hidden md:block text-right">
                                <div class="mr-4 ml-52 space-x-4">
                                    <Link
                                        to="/"
                                        class="font-semibold hover:text-orange-600  px-3 py-2 text-md"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/puja"
                                        class="font-semibold hover:text-orange-600  rounded-md px-3 py-2 text-md"
                                    >
                                        Puja
                                    </Link>
                                    <Link
                                        to="/panchang"
                                        class="font-semibold hover:text-orange-600  rounded-md px-3 py-2 text-md"
                                    >
                                        Panchang
                                    </Link>
                                    <Link
                                        to="/temple"
                                        className="font-semibold hover:text-orange-600 hover:glow rounded-md px-3 py-2 text-md">
                                        Temples
                                    </Link>
                                    <Link
                                        to="/library"
                                        class="font-semibold hover:text-orange-600  rounded-md px-3 py-2 text-md"
                                    >
                                        Library
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            {/* <div class="ml-4 flex items-center md:ml-6"> */}


                            <div class="relative ml-3">
                                <div>
                                    <button
                                        type="button"
                                        class="flex max-w-xs items-center font-bold rounded-full p-1 text-xl border border-2 border-gray-400 hover:border-orange-600"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        onClick={() => setstate(!state)}
                                    >
                                        <span class="sr-only">Open user menu</span>

                                        <IoPersonOutline className="text-gray-400 w-6 h-6 stroke-20 hover:text-orange-600" />
                                    </button>
                                </div>

                                <div
                                    class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabindex="-1"
                                    style={{
                                        display: state ? "flex" : "none",
                                        flexDirection: "column",
                                    }}
                                >
                                    <>
                                        <p class="text-gray-400 text-left ml-4 text-base font-semibold">Hello, Sri Mandir Bhakt </p>
                                        <p class="text-gray-400 text-left ml-4 mb-4 text-sm"> Welcome to Sri Mandir Puja Seva</p>
                                        <hr />
                                        <p class="text-gray-500 text-left ml-2 mt-4 text-xs">Account Details</p>
                                        <Link
                                            to="/profile"
                                            class="block px-4 py-2 text-md font-semibold text-gray-500"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="user-menu-item-0"
                                        >
                                            <span class="flex items-center">
                                                <IoPersonOutline class="mr-2" /> My Profile
                                            </span>
                                        </Link>

                                        <Link
                                            to="/pujaBookings"
                                            class="block px-4 py-2 text-md font-semibold text-gray-500"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="user-menu-item-1"
                                        >
                                            <span class="flex items-center">
                                                <PiNoteBold class="mr-2" />My Puja Bookings
                                            </span>
                                        </Link>

                                        <Link
                                            to="/ramotsavBookings"
                                            class="block px-4 py-2 text-md font-semibold text-gray-500"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="user-menu-item-1"
                                        >
                                            <span class="flex items-center">
                                                <PiNoteBold class="mr-2" />My Ramotsav Bookings
                                            </span>
                                        </Link>

                                        <Link
                                            to="/bookPuja"
                                            class="block px-4 py-2 mb-2 text-md font-semibold text-gray-500"
                                            role="menuitem"
                                            tabindex="-1"
                                            id="user-menu-item-2"
                                        >
                                            <span class="flex items-center">
                                                <IoMdLogIn class="mr-2" />Book a Puja
                                            </span>
                                        </Link>
                                        <hr />
                                        <p class="text-gray-400 text-left ml-4 mt-4 text-sm font-semibold">Help & Support for Puja Booking</p>
                                        <div class="flex my-4">
                                            <button class="flex px-4 mx-4  py-2 bg-blue-50 w-42 rounded-md " ><img src={mail} alt="email" class="mx-2" /> <span class="text-gray-600 text-xs font-semibold">Email us</span></button>
                                            <button class="flex px-4 mx-4  py-2 bg-blue-50 w-42 rounded-md " ><img src={watsapp} alt="email" class="mx-2" /> <span class="text-gray-600 text-xs font-semibold">Whatsapp us</span></button>
                                        </div>
                                    </>
                                </div>

                            </div>
                            {/* </div> */}
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                class="inline-flex items-center justify-center rounded-md bg- p-2  text-gray-500  hover:text-green-900  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-800"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setmobilestate(!mobilestate)}
                            >
                                <span class="sr-only">Open main menu</span>

                                <svg
                                    class="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>

                                <svg
                                    class="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    class="md:hidden bg-white "
                    id="mobile-menu"
                    style={{
                        display: mobilestate ? "flex" : "none",
                        flexDirection: "column",
                    }}
                >
                    <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        <Link
                            to="/"
                            class="text-gray-500 hover:text-orange-600 text-left block rounded-md px-3 py-2 text-md"
                            aria-current="page"
                        >
                            Home
                        </Link>
                        <Link
                            to="/puja"
                            class="text-gray-500 hover:text-orange-600 text-left block rounded-md px-3 py-2 text-md"
                        >
                            Puja
                        </Link>
                        <Link
                            to="/panchang"
                            class="text-gray-500 hover:text-orange-600 text-left block rounded-md px-3 py-2 text-md"
                        >
                            Panchang
                        </Link>
                        <Link
                            to="/temple"
                            class="text-gray-500 hover:text-orange-600 text-left block rounded-md px-3 py-2 text-md"
                        >
                            Temples
                        </Link>
                        <Link
                            to="/library"
                            class="text-gray-500 hover:text-orange-600 text-left block rounded-md px-3 py-2 text-md"
                        >
                            Library
                        </Link>
                    </div>
                    <div class="border-t border-black-700 pb-3 pt-4">
                        {/* <div class="flex items-center px-5">
                            <button
                                type="button"
                                class="ml-auto flex-shrink-0 rounded-full bg-black-800 p-1 text-gray-500-400  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black-800"
                            >
                                <span class="sr-only">View notifications</span>
                                <svg
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>
                        </div> */}
                        <div class="mt-3 space-y-1 px-2">
                            {/* <Link
                                to="/profile"
                                class="block rounded-md px-3 py-2 text-md text-gray-500-400  hover:text-orange-600 "
                            >
                                <span class="flex items-center font-semibold justify-center text-gray-500 ">
                                    <IoPersonOutline class="mr-2" /> Your Profile
                                </span>
                            </Link>
                            <Link
                                to="/pujaBookings"
                                class="block rounded-md px-3 py-2 text-md text-gray-500-400  hover:text-orange-600 "
                            >
                                <span class="flex items-center font-semibold justify-center text-gray-500 ">
                                    <IoWalletOutline class="mr-2" />Wallet
                                </span>
                            </Link>
                            <Link
                                to="/ramotsavBookings"
                                class="block rounded-md px-3 py-2 text-md text-gray-500-400  hover:text-orange-600 "
                            >
                                <span class="flex items-center font-semibold justify-center text-gray-500 ">
                                    <RiAdminFill class="mr-2" /> Admin
                                </span>
                            </Link>
                            <Link
                                to="/"
                                // onClick={handleLogout}
                                class="block rounded-md px-3 py-2 text-md text-gray-500-400  hover:text-orange-600 "
                            >
                                <span class="flex items-center font-semibold justify-center text-gray-500 ">
                                    <IoMdLogIn class="mr-2" /> Log out
                                </span>
                            </Link> */}
                            <>
                                <p class="text-gray-400 text-left ml-4 text-base font-semibold">Hello, Sri Mandir Bhakt </p>
                                <p class="text-gray-400 text-left ml-4 mb-4 text-sm"> Welcome to Sri Mandir Puja Seva</p>
                                <hr />
                                <p class="text-gray-500 text-left ml-2 mt-4 text-xs">Account Details</p>
                                <Link
                                    to="/profile"
                                    class="block px-4 py-2 text-md font-semibold text-gray-500"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-0"
                                >
                                    <span class="flex items-center">
                                        <IoPersonOutline class="mr-2" /> My Profile
                                    </span>
                                </Link>

                                <Link
                                    to="/pujaBookings"
                                    class="block px-4 py-2 text-md font-semibold text-gray-500"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                >
                                    <span class="flex items-center">
                                        <PiNoteBold class="mr-2" />My Puja Bookings
                                    </span>
                                </Link>

                                <Link
                                    to="/ramotsavBookings"
                                    class="block px-4 py-2 text-md font-semibold text-gray-500"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-1"
                                >
                                    <span class="flex items-center">
                                        <PiNoteBold class="mr-2" />My Ramotsav Bookings
                                    </span>
                                </Link>

                                <Link
                                    to="/bookPuja"
                                    class="block px-4 py-2 mb-2 text-md font-semibold text-gray-500"
                                    role="menuitem"
                                    tabindex="-1"
                                    id="user-menu-item-2"
                                >
                                    <span class="flex items-center">
                                        <IoMdLogIn class="mr-2" />Book a Puja
                                    </span>
                                </Link>
                                <hr />
                                <p class="text-gray-400 text-left ml-4 mt-4 text-sm font-semibold">Help & Support for Puja Booking</p>
                                <div class="flex my-4">
                                    <button class="flex px-4 mx-4  py-2 bg-blue-50 w-42 rounded-md " ><img src={mail} alt="email" class="mx-2" /> <span class="text-gray-600 text-xs font-semibold">Email us</span></button>
                                    <button class="flex px-4 mx-4  py-2 bg-blue-50 w-42 rounded-md " ><img src={watsapp} alt="email" class="mx-2" /> <span class="text-gray-600 text-xs font-semibold">Whatsapp us</span></button>
                                </div>
                            </>
                        </div>

                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;
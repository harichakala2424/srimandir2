import React, { useEffect, useState } from "react";
import banner from "../assets/img_hero_artwork_en.webp"
import playstore from "../assets/img_playstore_logo.svg"
import appstore from "../assets/img_appstore_logo.svg"
import bedge from "../assets/img_achievement.webp"
import seva from "../assets/ic_puja_seva.svg"
import panchang from "../assets/ic_panchang.svg"
import astro from "../assets/ic_astro.svg"
import festivals from "../assets/ic_festivals.svg"
import music from "../assets/ic_music.svg"
import mandir_darshan from "../assets/ic_mandir_darshan.svg"
import sahitya from "../assets/ic_sahitya.svg"
import chadhava from "../assets/ic_chadhava_seva.svg"
import link1 from "../assets/img_link_01.webp"
import link2 from "../assets/img_link_02.webp"
import link3 from "../assets/img_link_03.webp"
import link4 from "../assets/img_link_04.webp"
import family from "../assets/img_showcase_section_family.webp"
import digital from "../assets/ic_footer_logo_digitalindia.svg"
import startup from "../assets/ic_footer_logo_startupindia.svg"
import azadi from "../assets/ic_footer_logo_azadi_ka_mahotsav.svg"
import Navbar from "../components/Navbar";
const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="flex flex-col md:flex-row bg-orange-50 justify-between mt-16 py-6">
                    <div className="md:mt-24 px-6 md:px-36 w-full md:w-1/2">
                        <p className="flex text-left items-center"><img src={bedge} alt="" className="mr-2" /> WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
                        <h2 className="font-bold text-left text-2xl md:text-4xl my-4 mb-10">Pray daily with <span style={{ color: "#f18c33" }}>Sri Mandir</span>. One App for all your devotional needs.</h2>
                        <div className="flex justify-center md:justify-start">
                            <img src={playstore} alt="" className="mx-2 w-24 md:w-48 h-auto" />
                            <img src={appstore} alt="" className="mx-2 w-24 md:w-48 h-auto" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src={banner} alt="" className="mx-2 my-2 ml-0 md:ml-10 md:mr-16 md:w-full h-64 md:h-128" />
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <h2 className="font-bold text-2xl md:text-4xl my-4 mb-10">Explore Sri Mandir</h2>
                    <div className="flex flex-col md:flex-row sm:justify-center md:justify-between" style={{ width: "90%", margin: "auto" }}>
                        {[seva, astro, chadhava, festivals, music, mandir_darshan, sahitya, panchang].map((src, index) => (
                            <div key={index} className=" w-1/8 sm:w-1/2 p-4 text-center">
                                <img src={src} alt="" className="h-20 w-20 mx-auto" />
                                <p className="mt-2  font-semibold text-gray-600">Book temples</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-50 mt-16 pt-8 pb-6 text-center">
                    <h2 className="font-bold text-2xl md:text-4xl my-4 mb-10">Our Divine Mission recognised by Prominent Media Outlets</h2>
                    <div className="flex flex-wrap justify-center md:justify-between mx-auto" style={{ width: "90%" }}>
                        {[link1, link2, link3, link4].map((src, index) => (
                            <img key={index} src={src} alt="" className="w-1/2 md:w-72 m-2 md:m-0" />
                        ))}
                    </div>
                </div>
                {/* FOOTER */}
                <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
                    <div className="md:mt-24 px-6 md:px-24 md:mt-48 w-full md:w-1/2">
                        <h2 className="font-bold text-2xl md:text-4xl my-4">Download Sri Mandir app now !!</h2>
                        <p className="mb-4 text-lg md:text-xl">Connect to your beloved God, anytime, anywhere!</p>
                        <div className="flex justify-center md:justify-start">
                            <img src={playstore} alt="" className="mx-2 w-24 md:w-48 h-auto" />
                            <img src={appstore} alt="" className="mx-2 w-24 md:w-48 h-auto" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img src={family} alt="" className="mx-2 md:h-132 w-4/5 md:mr-24" />
                    </div>
                </div>
                <div className="flex items-center bg-orange-600 px-4 py-1 justify-center md:justify-start">
                    <img src={mandir_darshan} alt="" className="h-10 w-auto  md:ml-20" />
                    <p className="text-white text-left px-2 py-4 font-semibold">Sri Mandir</p>
                </div>
                <div className="flex justify-center md:justify-start px-4 py-2">
                    <img src={digital} alt="" className="h-8 w-auto mx-2  md:ml-20" />
                    <img src={startup} alt="" className="h-8 w-auto mx-2" />
                    <img src={azadi} alt="" className="h-8 w-auto mx-2" />
                </div>
                {/* FOOTER */}
            </div>

        </>
    )
}

export default Home;
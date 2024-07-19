import Navbar from "../components/Navbar"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/img_desktop_banner_review.webp"
import banner2 from "../assets/img_desktop_banner_devotees.webp"
import banner3 from "../assets/img_desktop_banner_puja.webp"
import shiv from "../assets/1720847450394.webp"
import kali from "../assets/1720875578009.webp"
import kashi from "../assets/1720850112827.webp"
import playstore from "../assets/img_playstore_logo.svg"
import appstore from "../assets/img_appstore_logo.svg"
import mandir_darshan from "../assets/ic_mandir_darshan.svg"
import family from "../assets/img_showcase_section_family.webp"
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import digital from "../assets/ic_footer_logo_digitalindia.svg"
import startup from "../assets/ic_footer_logo_startupindia.svg"
import azadi from "../assets/ic_footer_logo_azadi_ka_mahotsav.svg"
import { Link } from "react-router-dom";

const Puja = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        banner1, banner2, banner3
    ]

    return (
        <>
            <Navbar />
            <div className="mt-16 ">
                {/* prev */}
                {/* <div className="bg-gradient-to-b from-orange-100 to-white h-screen">
                    <div className="mx-auto pt-4  " style={{ width: "80%" }}>
                        <h2 className="font-bold text-left text-4xl my-4 mb-10 leading-snug">Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h2>
                        <div className="slider-container ">
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} style={{ width: "80%", margin: "auto" }}>
                                        <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="mx-auto" style={{ width: "80%" }}>
                    <h2 className="font-bold text-left text-4xl ">Upcoming Pujas on Sri Mandir.</h2>
                    <p className="text-left text-xl my-4">Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
                    <div className="flex my-4 justify-between">
                        <div className="border rounded-md my-6" style={{ width: "32%" }}>
                            <img src={shiv} alt="" className="rounded px-3 py-3" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL <hr style={{ width: "80%", margin: "auto", color: "#EC4899" }} /></p>
                            <p className="font-bold text-left text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/1"}>
                                <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }}>PARTICPATE</button>
                            </Link>
                        </div>
                        <div className="border rounded-md my-6" style={{ width: "32%" }}>
                            <img src={kali} alt="" className="rounded px-3 py-3" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL <hr style={{ width: "80%", margin: "auto", color: "#EC4899" }} /></p>
                            <p className="font-bold text-left text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/2"}>
                                <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }}>PARTICPATE</button>
                            </Link>
                        </div>
                        <div className="border rounded-md my-6" style={{ width: "32%" }}>
                            <img src={kashi} alt="" className="rounded px-3 py-3" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL <hr style={{ width: "80%", margin: "auto", color: "#EC4899" }} /></p>
                            <p className="font-bold text-left text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/3"}>
                                <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }}>PARTICPATE</button>
                            </Link>
                        </div>
                    </div>
                </div> */}

                {/* new */}

                <div className="bg-gradient-to-b from-orange-100 to-white ">
                    <div className="mx-auto pt-4 w-11/12 lg:w-4/5 ">
                        <h2 className="font-bold text-left text-2xl sm:text-3xl lg:text-4xl my-4 mb-10 leading-snug">Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h2>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className="w-full lg:w-4/5 mx-auto">
                                        <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-11/12 lg:w-4/5 mt-24 md:mt-28">
                    <h2 className="font-bold text-left text-2xl sm:text-3xl lg:text-4xl">Upcoming Pujas on Sri Mandir.</h2>
                    <p className="text-left text-base sm:text-lg lg:text-xl my-4">Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
                    <div className="flex flex-wrap my-4 justify-between">
                        <div className="border rounded-md my-6 w-full sm:w-48 lg:w-1/3 p-4">
                            <img src={shiv} alt="" className="rounded w-full" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL</p>
                            <hr className="w-4/5 mx-auto mb-3" style={{ color: "#EC4899" }} />
                            <p className="font-bold text-left text-xl sm:text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-lg sm:text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/1"}>
                                <button className="border bg-green-500 w-full py-2 rounded-lg font-semibold text-white my-2">PARTICIPATE</button>
                            </Link>
                        </div>
                        <div className="border rounded-md my-6 w-full sm:w-48 lg:w-1/3 p-4">
                            <img src={kali} alt="" className="rounded w-full" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL</p>
                            <hr className="w-4/5 mx-auto mb-3" style={{ color: "#EC4899" }} />
                            <p className="font-bold text-left text-xl sm:text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-lg sm:text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/2"}>
                                <button className="border bg-green-500 w-full py-2 rounded-lg font-semibold text-white my-2">PARTICIPATE</button>
                            </Link>
                        </div>
                        <div className="border rounded-md my-6 w-full sm:w-48 lg:w-1/3 p-4">
                            <img src={kashi} alt="" className="rounded w-full" />
                            <p className="font-semibold text-pink-500 text-xs mb-3">JYOTIRLINGA PRADOSH SPECIAL</p>
                            <hr className="w-4/5 mx-auto mb-3" style={{ color: "#EC4899" }} />
                            <p className="font-bold text-left text-xl sm:text-2xl mx-2 my-2">1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha</p>
                            <p className="text-left text-lg sm:text-xl mx-2 my-2">For Resolving Conflicts in Relationships</p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />
                                Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh
                            </p>
                            <p className="flex items-center text-left mx-2 my-4 text-base">
                                <FaRegCalendarMinus style={{ color: 'orange', fontSize: '1em', marginRight: '0.5rem' }} />
                                18 July, Thursday, Ashadha Shukla Dwadashi
                            </p>
                            <Link to={"/puja/3"}>
                                <button className="border bg-green-500 w-full py-2 rounded-lg font-semibold text-white my-2">PARTICIPATE</button>
                            </Link>
                        </div>
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

export default Puja
import React, { useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/img_desktop_banner_review.webp"
import banner2 from "../assets/img_desktop_banner_devotees.webp"
import banner3 from "../assets/img_desktop_banner_puja.webp"
import shiv from "../assets/1720847450394.webp"
import kali from "../assets/1720875578009.webp"
import kashi from "../assets/1720850112827.webp"
import Navbar from '../components/Navbar';
import playstore from "../assets/img_playstore_logo.svg"
import appstore from "../assets/img_appstore_logo.svg"
import mandir_darshan from "../assets/ic_mandir_darshan.svg"
import family from "../assets/img_showcase_section_family.webp"
import digital from "../assets/ic_footer_logo_digitalindia.svg"
import startup from "../assets/ic_footer_logo_startupindia.svg"
import azadi from "../assets/ic_footer_logo_azadi_ka_mahotsav.svg"
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";

const PujaDetails = () => {
    const { id } = useParams();
    const selectPackageRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate()

    const pujas = {
        1: {
            title: '1008 Shiv Gayatri Mantra Jaap, Pradosh-Stotrashtakam and Pradosh Vrat Katha',
            description: 'For Resolving Conflicts in Relationships',
            date: '18 July, Thursday, Ashadha Shukla Dwadashi',
            location: 'Shri Omkareshwar Jyotirlinga Temple, Khandwa, Madhya Pradesh',
            images: [
                shiv,
                banner1,
                banner2,
                banner3
            ],
        },
        2: {
            title: 'Kali Puja for Protection and Strength',
            description: 'For Overcoming Obstacles and Gaining Strength',
            date: '19 July, Friday, Ashadha Shukla Trayodashi',
            location: 'Kalighat Temple, Kolkata, West Bengal',
            images: [
                kali,
                banner1,
                banner2,
                banner3
            ],
        },
        3: {
            title: 'Kashi Vishwanath Special Puja',
            description: 'For Health and Prosperity',
            date: '20 July, Saturday, Ashadha Shukla Chaturdashi',
            location: 'Kashi Vishwanath Temple, Varanasi, Uttar Pradesh',
            images: [
                kashi,
                banner1,
                banner2,
                banner3
            ],
        },
    };

    const puja = pujas[id];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const scrollToPackages = () => {
        if (selectPackageRef.current) {
            window.scrollTo({
                top: selectPackageRef.current.offsetTop - 100, // Adjust offset as needed
                behavior: 'smooth' // Smooth scroll
            });
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(`WhatsApp Number: ${whatsappNumber}, Name: ${userName}`);
        setShowModal(false);
        navigate("/review")
    };

    return (
        <>
            <Navbar />
            <div className='mt-16'>
                {/* <div className="flex z-10 p-4 mx-auto bg-orange-100 sticky top-16">
                    <Link to={"/"}>
                        <p className='flex text-lg ml-36'>Home <IoIosArrowForward style={{ marginTop: "5px", marginLeft: "8px", color: "#F97316" }} /></p>
                    </Link>
                    <Link to={"/puja"}>
                        <p className='flex text-lg ml-6'>Sri Mandir Puja Seva <IoIosArrowForward style={{ marginTop: "5px", marginLeft: "8px", color: "#F97316" }} /></p>
                    </Link>
                </div>
                <div className="flex p-6 mx-auto mb-10" style={{ width: "80%" }}>
                    <div className="w-1/2">
                        <Slider {...settings}>
                            {puja.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={puja.title} className="rounded mb-4 w-full h-96" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-1/2 pl-6 flex flex-col justify-between">
                        <h2 className="text-left font-bold text-3xl mb-4">{puja.title}</h2>
                        <p className="text-left text-xl mb-4">{puja.description}</p>
                        <p className="flex text-left text-lg mb-4"><FaRegCalendarMinus style={{ color: 'orange', fontSize: '1.2em', marginRight: '0.5rem' }} />{puja.date}</p>
                        <p className="flex text-left text-lg"><MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />{puja.location}</p>
                        <p className="text-left text-xl mb-4">Till now <span className='text-orange-500 font-bold'>2,00,000+ Devotees</span> have participated in Pujas conducted by Sri Mandir Puja Seva.</p>
                        <button className="border bg-green-500 mx-auto w-full py-2 rounded-lg font-semibold text-white my-2" onClick={scrollToPackages}>Select Puja Package</button>

                    </div>
                </div>
                <div className='mb-6 sticky top-32 bg-white'>
                    <hr />
                    <div className='flex justify-between mx-auto text-lg p-2' style={{ width: "80%" }}>
                        <Link>About Puja</Link>
                        <Link>Benefits</Link>
                        <Link>Process</Link>
                        <Link>Temple Details</Link>
                        <Link>Packages</Link>
                        <Link>Reviews</Link>
                    </div>
                    <hr />
                </div>
                <div className='mx-auto' style={{ width: "80%" }}>
                    <h2 className="text-left font-bold text-3xl mb-4">Kashi Batuk Bhairav Special Batuk Bhairav Stotra path and Tantra Yukta Havan For protection from Negative Energies, Evil Forces and Adversities in Life</h2>
                    <p className="text-left mb-6">In Hinduism, Batuk Bhairav is considered the fifth incarnation of Lord Shiva, who is Satvik, beautiful, and a 5-year-old child. It is believed that Lord Bhairav protects his devotees and the city of Kashi from negative energies. Devotees believe that his presence and blessings ensure spiritual protection, prosperity, and well-being for the people of Kashi. The Bhairav Tantra Puja and the recitation of Batuk Bhairav Stotra are so powerful that just by listening to it, devotees can receive blessings of Lord Batuk Bhairav for protection against enemies and destruction of negative energies.</p>
                    <p className="text-left">According to the Vedas and Puranas, once when Devi Parvati took the destructive form of Maa Kali to kill the demon Daruk, she lost control. To bring her back to consciousness, Bhagwan Shiva took the form of a five-year-old child and started calling Devi as 'Maa'. Hearing this, the heart of Maa Kali melted, and she returned to her form as Devi Parvati. The form that Bhagwan Shiva took to pacify Maa Kali is known as 'Batuk Bhairav'. Worshipping this gentle form yields quick results. Therefore, the Batuk Bhairav Stotra path and Tantra Yukta Havan will be organized at Shri Batuk Bhairav Temple, Kashi. Participate in this puja through Sri Mandir and receive the boon of protection from negative energies, evil forces, and adversities in life.</p>
                    <div ref={selectPackageRef} className='mt-16'>
                        <h2 className="text-left font-bold text-3xl mb-4">Select puja package</h2>
                        <div className='flex justify-between'>
                            <div className='border border-orange-500 rounded pt-4 bg-gradient-to-b from-orange-50 to-white mx-2'>
                                <h1 className='text-orange-500 text-5xl my-4' >₹851</h1>
                                <p className='text-2xl font-semibold text-orange-500 my-2'>Individual Puja</p>
                                <p className='text-xl font-semibold mb-4 text-gray-500 my-2'>Puja for 1 Person</p>
                                <hr />
                                <ul className='mx-4 text-left my-2'>

                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Pandit ji will call out your name and gotra during the puja sankalp.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Bhog consisting of fruits, sweets, and dry fruits will be offered to Batuk Bhairav at Shri Batuk Bhairav Temple, Kashi.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Sacred tirth prasad will be sent to your address within 8-10 days.
                                    </li>
                                    <hr />
                                    
                                        <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} onClick={toggleModal}>PARTICIPATE</button>
                                    
                                </ul>
                            </div>
                            <div className='border border-orange-500 rounded pt-4 bg-gradient-to-b from-orange-50 to-white mx-2'>
                                <h1 className='text-orange-500 text-5xl my-4' >₹851</h1>
                                <p className='text-2xl font-semibold text-orange-500 my-2'>Individual Puja</p>
                                <p className='text-xl font-semibold mb-4 text-gray-500 my-2'>Puja for 1 Person</p>
                                <hr />
                                <ul className='mx-4 text-left my-2'>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Pandit ji will call out your name and gotra during the puja sankalp.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Bhog consisting of fruits, sweets, and dry fruits will be offered to Batuk Bhairav at Shri Batuk Bhairav Temple, Kashi.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Sacred tirth prasad will be sent to your address within 8-10 days.
                                    </li>
                                    <hr />
                                    
                                        <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} onClick={toggleModal}>PARTICIPATE</button>
                                    
                                </ul>
                            </div>
                            <div className='border border-orange-500 rounded pt-4 bg-gradient-to-b from-orange-50 to-white mx-2'>
                                <h1 className='text-orange-500 text-5xl my-4' >₹851</h1>
                                <p className='text-2xl font-semibold text-orange-500 my-2'>Individual Puja</p>
                                <p className='text-xl font-semibold mb-4 text-gray-500 my-2'>Puja for 1 Person</p>
                                <hr />
                                <ul className='mx-4 text-left my-2'>

                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Pandit ji will call out your name and gotra during the puja sankalp.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Bhog consisting of fruits, sweets, and dry fruits will be offered to Batuk Bhairav at Shri Batuk Bhairav Temple, Kashi.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Sacred tirth prasad will be sent to your address within 8-10 days.
                                    </li>
                                    <hr />
                                    
                                        <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} onClick={toggleModal}>PARTICIPATE</button>
                                    
                                </ul>
                            </div>
                            <div className='border border-orange-500 rounded pt-4 bg-gradient-to-b from-orange-50 to-white mx-2'>
                                <h1 className='text-orange-500 text-5xl my-4' >₹851</h1>
                                <p className='text-2xl font-semibold text-orange-500 my-2'>Individual Puja</p>
                                <p className='text-xl font-semibold mb-4 text-gray-500 my-2'>Puja for 1 Person</p>
                                <hr />
                                <ul className='mx-4 text-left my-2'>

                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Pandit ji will call out your name and gotra during the puja sankalp.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Bhog consisting of fruits, sweets, and dry fruits will be offered to Batuk Bhairav at Shri Batuk Bhairav Temple, Kashi.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.
                                    </li>
                                    <li className='flex my-1 text-lg text-gray-600 items-center mt-3'>
                                        <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                        Sacred tirth prasad will be sent to your address within 8-10 days.
                                    </li>
                                    <hr />
                                    
                                        <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} onClick={toggleModal}>PARTICIPATE</button>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* NEW */}
                <div className="flex z-10 p-4 pb-2 mx-auto bg-orange-100 sticky top-16">
                    <Link to={"/"}>
                        <p className='flex text-lg ml-6 md:ml-36'>Home <IoIosArrowForward style={{ marginTop: "5px", marginLeft: "8px", color: "#F97316" }} /></p>
                    </Link>
                    <Link to={"/puja"}>
                        <p className='flex text-lg ml-6'>Sri Mandir Puja Seva <IoIosArrowForward style={{ marginTop: "5px", marginLeft: "8px", color: "#F97316" }} /></p>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row p-6 mx-auto mb-10" style={{ width: "80%" }}>
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <Slider {...settings}>
                            {puja.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={puja.title} className="rounded mb-4 w-full md:h-96" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-6 flex flex-col justify-between">
                        <h2 className="text-left font-bold text-2xl md:text-3xl ">{puja.title}</h2>
                        <p className="text-left text-lg md:text-xl ">{puja.description}</p>
                        <p className="flex text-left text-lg "><FaRegCalendarMinus style={{ color: 'orange', fontSize: '1.2em', marginRight: '0.5rem' }} />{puja.date}</p>
                        <p className="flex text-left text-lg"><MdOutlineTempleBuddhist style={{ color: 'orange', fontSize: '1.6em', marginRight: '0.5rem', marginBottom: "15px" }} />{puja.location}</p>
                        <p className="text-left text-lg md:text-xl font-semibold">Till now <span className='text-orange-500 font-bold'>2,00,000+ Devotees</span> have participated in Pujas conducted by Sri Mandir Puja Seva.</p>
                        <button className="border bg-green-500 w-full py-2 rounded-lg font-semibold text-white my-2" onClick={scrollToPackages}>Select Puja Package</button>
                    </div>
                </div>
                <div className='sticky top-28 bg-white'>
                    <hr />
                    <div className='flex flex-wrap justify-between mx-auto text-lg p-2' style={{ width: "80%" }}>
                        <Link className='mb-2 md:mb-0'>About Puja</Link>
                        <Link className='mb-2 md:mb-0'>Benefits</Link>
                        <Link className='mb-2 md:mb-0'>Process</Link>
                        <Link className='mb-2 md:mb-0'>Temple Details</Link>
                        <Link className='mb-2 md:mb-0'>Packages</Link>
                        <Link className='mb-2 md:mb-0'>Reviews</Link>
                    </div>
                    <hr />
                </div>
                <div className='mx-auto mt-16' style={{ width: "80%" }}>
                    <h2 className="text-left font-bold text-2xl md:text-3xl mb-4">Kashi Batuk Bhairav Special Batuk Bhairav Stotra path and Tantra Yukta Havan For protection from Negative Energies, Evil Forces and Adversities in Life</h2>
                    <p className="text-left mb-6">In Hinduism, Batuk Bhairav is considered the fifth incarnation of Lord Shiva, who is Satvik, beautiful, and a 5-year-old child. It is believed that Lord Bhairav protects his devotees and the city of Kashi from negative energies. Devotees believe that his presence and blessings ensure spiritual protection, prosperity, and well-being for the people of Kashi. The Bhairav Tantra Puja and the recitation of Batuk Bhairav Stotra are so powerful that just by listening to it, devotees can receive blessings of Lord Batuk Bhairav for protection against enemies and destruction of negative energies.</p>
                    <p className="text-left">According to the Vedas and Puranas, once when Devi Parvati took the destructive form of Maa Kali to kill the demon Daruk, she lost control. To bring her back to consciousness, Bhagwan Shiva took the form of a five-year-old child and started calling Devi as 'Maa'. Hearing this, the heart of Maa Kali melted, and she returned to her form as Devi Parvati. The form that Bhagwan Shiva took to pacify Maa Kali is known as 'Batuk Bhairav'. Worshipping this gentle form yields quick results. Therefore, the Batuk Bhairav Stotra path and Tantra Yukta Havan will be organized at Shri Batuk Bhairav Temple, Kashi. Participate in this puja through Sri Mandir and receive the boon of protection from negative energies, evil forces, and adversities in life.</p>
                    <div ref={selectPackageRef} className='mt-16'>
                        <h2 className="text-left font-bold text-2xl md:text-3xl mb-4">Select puja package</h2>
                        <div className='flex flex-col md:flex-row justify-between'>
                            {Array(4).fill(0).map((_, idx) => (
                                <div key={idx} className='border border-orange-500 rounded pt-4 bg-gradient-to-b from-orange-50 to-white mb-4 w-full mx-2'>
                                    <h1 className='text-orange-500 text-3xl md:text-5xl my-4'>₹851</h1>
                                    <p className='text-xl md:text-2xl font-semibold text-orange-500 my-2'>Individual Puja</p>
                                    <p className='text-lg md:text-xl font-semibold mb-4 text-gray-500 my-2'>Puja for 1 Person</p>
                                    <hr />
                                    <ul className='mx-4 text-left my-2'>
                                        <li className='flex my-1 text-base md:text-lg text-gray-600 items-center mt-3'>
                                            <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                            Pandit ji will call out your name and gotra during the puja sankalp.
                                        </li>
                                        <li className='flex my-1 text-base md:text-lg text-gray-600 items-center mt-3'>
                                            <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                            Bhog consisting of fruits, sweets, and dry fruits will be offered to Batuk Bhairav at Shri Batuk Bhairav Temple, Kashi.
                                        </li>
                                        <li className='flex my-1 text-base md:text-lg text-gray-600 items-center mt-3'>
                                            <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva, or Deep Daan to be done in your name.
                                        </li>
                                        <li className='flex my-1 text-base md:text-lg text-gray-600 items-center mt-3'>
                                            <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                            Upon completion, a video of your puja and offering will be shared with you on your registered WhatsApp number or can be found in your booking history within 3-4 days.
                                        </li>
                                        <li className='flex my-1 text-base md:text-lg text-gray-600 items-center mt-3'>
                                            <FaCircleDot className="text-orange-500 w-4 h-8 mr-2 self-start flex-shrink-0" />
                                            Sacred tirth prasad will be sent to your address within 8-10 days.
                                        </li>
                                        <hr />
                                        <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} onClick={toggleModal}>PARTICIPATE</button>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* NEW */}

                {showModal && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded-lg max-w-md w-full">
                            <h2 className="text-xl text-left font-bold mb-4">Fill your details for Puja</h2>
                            <hr />
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <h2 className="text-lg text-left font-bold mt-4">Enter Your Whatsapp Mobile Number</h2>
                                    <p className="text-left">Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.</p>
                                    {/* <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Number</label> */}
                                    <input type="text" id="whatsappNumber" name="whatsappNumber" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} className="mt-1 block w-full border h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-lg text-left font-bold mt-4">Enter Your Name</h2>
                                    {/* <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Your Name</label> */}
                                    <input type="text" id="userName" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} className="mt-1 block w-full border  border-gray-300 h-10 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="bg-orange-500 w-full py-2 px-4 rounded-lg text-white font-semibold">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

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
    );
};

export default PujaDetails;

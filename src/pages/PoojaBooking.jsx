// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"

// const PoojaBooking = () => {
//     return (
//         <>
//             <Navbar />
//             <hr className="mt-16"/>
//             <div style={{ width: "30%", margin: "auto", marginTop: "150px" }}>
//                 <h2 className="text-4xl font-bold my-3">No Puja has been booked yet</h2>
//                 <p className="text-2xl text-gray-500">Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja </p>
//                 <Link to={"/puja"}>
//                     <button className="border border-orange-500 bg-orange-500 px-4 py-2 text-lg text-white font-semibold my-5 rounded-2xl" >Book Pooja Now</button>
//                 </Link></div>
//         </>
//     )
// }

// export default PoojaBooking






import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PoojaBooking = () => {
    return (
        <>
            <Navbar />
            <hr className="mt-16" />
            <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/3 mx-auto mt-24 sm:mt-36 text-center px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3">No Puja has been booked yet</h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-4">Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja.</p>
                <Link to="/puja">
                    <button className="border border-orange-500 bg-orange-500 px-4 py-2 text-base sm:text-lg md:text-xl text-white font-semibold my-5 rounded-2xl">Book Pooja Now</button>
                </Link>
            </div>
        </>
    );
};

export default PoojaBooking;

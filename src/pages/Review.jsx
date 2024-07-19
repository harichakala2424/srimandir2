import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Review = () => {

    return (
        <>
            <Navbar />
            <hr className="mt-16" />
            <div className="my-10" >
                <h2 className="text-2xl font-bold mx-2 md:ml-36 text-left">Review Booking</h2>
                <hr />
                <div className="w-80 md:w-96 border border-gray-500 text-left rounded p-4 mt-10 mx-2 md:ml-36">
                    <p className="text-2xl font-bold">Shiv Gayatri Mantra Jaap...</p>
                    <p>Individual Puja</p>
                    <p className="text-lg"> ₹ 851</p>
                </div>
                <div className="w-80 md:w-96 border border-gray-500 text-left rounded p-4 mt-10 mx-2 md:ml-36">
                    <p className="text-2xl font-bold text-blue-500">Apply Coupon</p>

                </div>
                <div className="w-80 md:w-96 border border-gray-500 text-left rounded p-4 mt-10 mx-2 md:ml-36">
                    <p className="text-2xl font-bold">Bill Details</p>

                    <div className="flex justify-between my-2"><p>Individual Puja</p> <p className="text-lg"> ₹ 851</p></div>
                    <hr />
                    <div className="flex justify-between my-2"><p>Total amount</p> <p className="text-lg"> ₹ 851</p></div>
                    <hr />
                    <Link to={"/"}>
                    <button className="border bg-green-500 mx-2 mx-auto py-2 rounded-lg font-semibold text-white my-2" style={{ width: "95%" }} >PARTICIPATE</button>
               </Link> </div>
            </div>
        </>
    )
}

export default Review;
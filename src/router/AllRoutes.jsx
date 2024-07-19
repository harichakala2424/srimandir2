import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PujaDetails from "../pages/PujaDetails";
import Puja from "../pages/Puja";
import PoojaBooking from "../pages/PoojaBooking";
import Review from "../pages/Review";
import PageNotFound from "../pages/PageNotFound";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puja/:id" element={<PujaDetails />} />
            <Route path="/puja" element={<Puja />} />
            <Route path="/pujaBookings" element={<PoojaBooking />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
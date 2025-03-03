import { Routes, Route, Link } from "react-router-dom";
import Booking from "./pages/booking.jsx";
import Services from "./pages/services.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/booking" element={<Booking />} />
                <Route path="/" element={<Booking />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </div>
    );
}

export default App;

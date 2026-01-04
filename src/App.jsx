import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/global.css";

function App() {
    return (
        <Router>
            <>
                <Navbar />

                <main>
                    <MainRoutes />
                </main>

                <Footer />
            </>
        </Router>
    );
}

export default App;

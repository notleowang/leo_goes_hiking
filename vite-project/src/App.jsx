import './App.css'
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
    return (
        <div className="font-roboto font-medium min-h-screen bg-dark_green">
            <div className="px-[254px]">
                <NavBar />
                <Hero />
            </div>
            <div className="fixed bottom-0">
                <Footer />
            </div>
        </div>
    );
}

export default App

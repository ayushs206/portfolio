import Background from "@/components/Background.jsx";
import Navbar from "@/components/Navbar.jsx";
import About from "@/components/sections/About.jsx";
import Journey from "@/components/sections/Journey.jsx";
import Projects from "@/components/sections/Projects.jsx";
import Contact from "@/components/sections/Contact.jsx";
import Footer from "@/components/Footer.jsx";

export default () => {
    return (
        <div className="min-h-screen relative font-minecraft flex flex-col">
            <Background />
            <Navbar />
            
            <main className="relative z-10 w-full pt-16 flex-grow">
                <About />
                <Journey />
                <Projects />
                <Contact />
            </main>
            
            <Footer />
        </div>
    )
}
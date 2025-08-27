import NavBar from "../Layouts/NavBar";
import ExploreSection from "./ExploreSection";
import FirstSection from "./FirstSection";
import Header from "./Header";
import HowOwchaWorks from "./HowOwchaWorks";
import Analytics from "./Analytics";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Footer from "./Footer";

const LandingPage = () => {
    return (    
        <div className="max-w-[100vw] overflow-hidden">
            <NavBar />
            <Header />
            <FirstSection />
            <ExploreSection />
            <HowOwchaWorks />
            <Analytics />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    )
}

export default LandingPage;
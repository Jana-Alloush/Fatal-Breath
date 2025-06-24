import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';

import HeroSection from '../../components/landing/sections/HeroSection';
import FeaturesSection from '../../components/landing/sections/FeaturesSection';
import ProtectionSection from '../../components/landing/sections/ProtectionSection';
import ScreensSection from '../../components/landing/sections/ScreensSection';
import TeamSection from '../../components/landing/sections/TeamSection';
import StatsSection from '../../components/landing/sections/StatsSection';
import FeaturesTable from '../../components/landing/sections/FeaturesTable';

const LandingPage = () => {
    const goToLogin = () => {
        // example redirect or modal open
        window.location.href = '/login';
    };

    return (
        <>
            <Navbar />
            <main>
                <HeroSection onGetStarted={goToLogin} />
                <FeaturesSection />
                <ProtectionSection />
                <ScreensSection />
                <TeamSection />
                <StatsSection />
                <FeaturesTable />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;

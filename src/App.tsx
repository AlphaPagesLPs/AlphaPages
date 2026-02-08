import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PortfolioSection from './components/PortfolioSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <PortfolioSection />
      <Portfolio />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

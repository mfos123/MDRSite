import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Areas from './components/Areas';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-water-glow opacity-80 blur-3xl" />
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Areas />
        <QuoteForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

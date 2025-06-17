import Contact from "./components/Contact";
import Donations from "./components/Donations";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Updates from "./components/Updates";

function App() {
  return (
    <main className="flex flex-col mx-auto">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Updates />
        <Donations />
        <Contact />
      </div>
    </main>
  );
}

export default App;

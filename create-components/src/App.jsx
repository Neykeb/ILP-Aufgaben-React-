import "./App.css";
import { HeroSection } from "./components/hero-section/hero.comp";
import { Navbar } from "./components/navbar/navbar.comp";
import { FlipCard } from "./components/cards/flipcard.comp";
import { Footer } from "./components/footer/footer.comp";

function App() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen overflow-hidden relative">
        <Navbar />
        <HeroSection />
        <div className="flex gap-10 justify-center p-8 ">
          <div className="flex flex-wrap gap-4">
            {/* Karte bleibt 320px, schrumpft nicht darunter */}
            <div className="shrink-0 w-80">
              <FlipCard title={"Winding Paths"} />
            </div>

            {/* Alternative: Mit min-width */}
            <div className="flex-1 min-w-64">
              <FlipCard title={"Mountain Peak"} />
            </div>

            {/* Mit max-width für Limit */}
            <div className="flex-1 max-w-sm">
              <FlipCard title={"Scenic Journey"} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

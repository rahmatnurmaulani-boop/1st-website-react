import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { statsData, menuData } from "./data/landingData";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <HeroSection stats={statsData} />
        <MenuSection items={menuData} />
      </main>
      <Footer />
    </div>
  );
}

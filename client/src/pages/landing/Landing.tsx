import Header from "../../layouts/Header";
import Footer from "./layouts/Footer";
import RoadMapSection from "./layouts/RoadMap-section";
import WelcomeSection from "./layouts/Welcome-section";

export default function Landing() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full">
        <Header />
        <main className="mt-16 md:mt-[84px]">
          <WelcomeSection />
          <RoadMapSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

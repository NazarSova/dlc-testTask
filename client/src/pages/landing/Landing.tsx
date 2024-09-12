import Header from "../../components/Header";
import RoadMapSection from "./layouts/RoadMap-section";
import WelcomeSection from "./layouts/Welcome-section";

export default function Landing() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full">
        <Header />
        <main className="mt-[84px]">
          <WelcomeSection />
          <RoadMapSection />
        </main>
      </div>
    </div>
  );
}

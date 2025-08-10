import Banner from "./_Components/Banner";
import About from "./_Components/About";
import Category from "./_Components/Category";
import HomeSection from "./_Components/HomeSection";
import Services from "./_Components/Services";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="bg-gradient-to-b from-[#f0f3fc] to-white py-1">
        <About />
      </div>
      <HomeSection />
      <div className="bg-gradient-to-b from-[#f0f3fc] to-white py-1">
        <Category />
      </div>
      <Services />
    </div>
  );
}

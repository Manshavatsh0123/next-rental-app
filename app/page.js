import Banner from "./_Components/Banner";
import About from "./_Components/About";
import Category from "./_Components/Category";
import HomeSection from "./_Components/HomeSection";


export default function Home() {
  return (
    <div className="">
      <Banner />
      <About />
      <HomeSection />
      <div className="bg-gradient-to-b from-[#f0f3fc] to-white py-1">
        <Category />
      </div>

    </div>
  );
}

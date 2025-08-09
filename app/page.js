import Banner from "./_Components/Banner";
import About from "./_Components/About";
import About1 from "./_Components/About1";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Banner/>
      <About/>
      <About1/>
    </div>
  );
}

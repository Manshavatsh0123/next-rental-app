import { Button } from "@/components/ui/button";
import Banner from "./_Components/Banner";
import About from "./_Components/About";


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Banner/>
      <About/>
    </div>
  );
}

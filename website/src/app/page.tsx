import Hero from "./components/hero";
import Carrerlog from "./components/careerlog/careerlog";
export default function Home() {
  return (
    <div className="w-full bg-ligghtmodeBG dark:bg-darkmodeBG1 flex flex-col items-center justify-center">
      <div>
        <Hero />
      </div>
      <div>
        <Carrerlog />
      </div>
    </div>
  );
}

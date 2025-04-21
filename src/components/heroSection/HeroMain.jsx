import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section className="pt-40 pb-24 bg-background relative">
      <div className="flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center px-6 gap-12">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";

function MainFileComponents() {
  return (
    <>
      <section className="w-full h-full bg-red-400">
        <Navbar />
        <Hero />
        <Content />
      </section>
    </>
  );
}

export default MainFileComponents;

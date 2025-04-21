import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import Footer from "./Footer";

function MainFileComponents() {
  return (
    <>
      <section className="w-full h-full bg-[#ed7e39] pb-4">
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </section>
    </>
  );
}

export default MainFileComponents;

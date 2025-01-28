// import image from "./AjayDevgan.png";
function Hero() {
  return (
    <>
      <section className="max-w-7xl mx-auto pt-12 px-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center pt-8">
          <div>
            <h1 className="font-extrabold md:text-6xl text-4xl text-orange-950 tracking-tighter">
              Bolo Zubaan <span className="text-orange-50">Kesari</span>
            </h1>
            <p className="text-xl text-orange-950 text-center font-medium">
              More you eats, sooner you dies
            </p>
          </div>

          <div className="h-[70vh]"></div>

          {
            /* <img */
            // src={image}
            // alt="Malik Ajay"
            // height={1000}
            // width={1000}
            // className="w-[100%] h-full object-fill"
            /* /> */
          }
        </div>
      </section>
    </>
  );
}
export default Hero;

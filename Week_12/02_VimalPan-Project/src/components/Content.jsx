import Card from "./Card";

function Content() {
  return (
    <>
      <section className="bg-white p-6 rounded-2xl mx-6">
        <div className="flex flex-col justify-center items-center gap-3 p-4 m-2">
          <h2 className="text-4xl font-extrabold tracking-tighter text-orange-950">
            Cancerous Products
          </h2>

          <div className="flex flex-col gap-1 mb-10">
            <p className="text-xl font-medium text-orange-950">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-center text-xl font-medium text-orange-950">
              Neque vitae hic temporibus.
            </p>
          </div>

          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
export default Content;

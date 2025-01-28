import Card from "./Card";

function Content() {
  return (
    <>
      <section className="bg-white p-8 rounded-2xl mx-6">
        <div>
          <h2>Canceri Products</h2>
        </div>
        <div className="bg-pink-300 p-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
export default Content;

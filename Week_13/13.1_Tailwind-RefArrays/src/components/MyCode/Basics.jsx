function Basics() {
  return (
    <>
      <div className="bg-gray-400 m-6 p-6">
        {/* These are the classes of tailwind of the Flex-box */}
        <h1 className="text-4xl font-bold text-center m-4">Flex Box</h1>
        <div className="flex justify-around">
          <div className="text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-red-600">
            Div 1
          </div>
          <div className="text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-green-600">
            Div 2
          </div>
          <div className="text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-blue-600">
            Div 3
          </div>
        </div>
        <br />
        <hr />
        {/* These are the classes of tailwind of the Grid */}
        <h1 className="text-4xl font-bold text-center m-4">Grid Box</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-6 text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-red-600">
            Div 1
          </div>
          <div className="col-span-2 text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-green-600">
            Div 2
          </div>
          <div className="col-span-4 text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-blue-600">
            Div 3
          </div>
        </div>
        <br />
        <hr />

        <h1 className="text-4xl font-bold text-center m-4">
          Mobile First Concept
        </h1>
        {/* This means that starts form the lime color and go up to yellow color (md 760px). Then
      from md to sm (650) make the color yellow. Then from sm to minimum make
      the color red. */}
        <div className="bg-red-600 sm:bg-yellow-600 md:bg-lime-600  px-10 py-2 rounded-xl m-5 font-bold text-center text-white text-2xl">
          This is a div
        </div>

        <br />
        <hr />

        <div className="grid grid-cols-10">
          <div className="md:col-span-4 col-span-full text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-red-600">
            This is a div 1
          </div>
          <div className="md:col-span-4 col-span-full text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-green-600">
            This is a div 2
          </div>
          <div className="md:col-span-2 col-span-full text-2xl font-bold px-10 py-2 rounded-xl m-5 bg-blue-600">
            This is a div 3
          </div>
        </div>
      </div>
    </>
  );
}
export default Basics;

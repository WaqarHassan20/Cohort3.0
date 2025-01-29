function SideContent() {
  return (
    <>
      <div className="w-full bg-blue-500">
        <div className="bg-black hidden md:block h-72"></div>
        <div className="grid grid-cols-11 gap-8 p-4 ">
          <div className="lg:col-span-2 col-span-11 h-96 rounded-2xl bg-red-400 -translate-y-12 shadow-lg hidden md:block "></div>
          <div className="lg:col-span-6 col-span-11 h-96 rounded-2xl bg-green-400 shadow-lg"></div>
          <div className="lg:col-span-3 col-span-11 h-96 rounded-2xl bg-yellow-400 shadow-lg"></div>
        </div>
      </div>
    </>
  );
}

export default SideContent;

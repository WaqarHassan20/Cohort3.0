import myImg from "../components/myImage.jpeg";
import Box from "./Box";
import TimeDiv from "./TimeDiv";
function SideContent() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 p-4">
        <div className="hidden md:block h-44"></div>
        <div className="grid grid-cols-11 gap-8 p-4">
          <div className="lg:col-span-2 col-span-11 h-fit rounded-2xl bg-white -translate-y-12 shadow-lg hidden md:block ">
            <div className="p-4 flex flex-col items-center gap-1 justify-center">
              <div className="p-10">
                <img
                  src={myImg}
                  height={200}
                  width={200}
                  alt="myImg"
                  className="rounded-2xl"
                />
              </div>
              <h1 className="font-extrabold text-2xl">Waqar UL Hassan</h1>
              <p className="font-medium text-sm sm:text-base md:text-lg lg ">
                HelloWaqar@gmail.com
              </p>
              <p className="font-medium">+91-9876543210</p>
              <p className="font-medium">Lahore, Pakistan</p>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-11 h-fit rounded-lg p-8 flex flex-col gap-2 shadow-lg bg-white">
            <div>
              <p className="font-bold text-sm">Monday, 14 October</p>
            </div>
            <div>
              <p className="font-extrabold text-3xl text-blue-900">
                Buenos días, WAQAR
              </p>
            </div>
            <div className="h-fit pt-2 ">
              <TimeDiv value={"UX Webinar"} status={"live"} />
              <hr />
              <TimeDiv value={"My First Webinar"} status={"UpComing"} />
              <hr />
              <TimeDiv value={"Important Webinar"} status={"live"} />
              <hr />
              <TimeDiv value={"Webinar 1"} status={"UpComing"} />
              <hr />
              <TimeDiv value={"Foreign Webinar"} status={"UpComing"} />
            </div>
          </div>

          <div className="lg:col-span-3 col-span-11 h-fit pt-4 rounded-2xl shadow-lg bg-white">
            <Box />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideContent;

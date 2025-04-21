import Button from "./Button";

function EmailPage() {
  return (
    <>
      <div className="h-screen bg-[#002b5b] text-white">
        <div className="pt-10">
          <div className="flex flex-col justify-around items-center h-64">
            <div className="flex">
              <h1 className="text-3xl font-bold text-center text-cyan-500">
                Webinar
              </h1>
              <h1 className="text-3xl font-bold text-center">.gg</h1>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-center">
                Let's Get Started
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button
            input={"text"}
            placeholder={"Email id"}
            buttonValue={"Continue"}
          />
        </div>
      </div>
    </>
  );
}

export default EmailPage;

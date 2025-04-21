import Button from "./Button";

function AgePage() {
  return (
    <>
      <div className="h-screen bg-[#002b5b] text-white">
        <div className="pt-10">
          <div className="flex flex-col justify-around items-center h-80">
            <div className="flex">
              <h1 className="text-3xl font-bold text-center text-cyan-500">
                Webinar
              </h1>
              <h1 className="text-3xl font-bold text-center">.gg</h1>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-center">
                Verify Your Age
              </h1>
            </div>
          </div>
        </div>
        <div className="h-56 flex flex-col justify-center items-center">
          <p className="font-bold">
            Please confirm your birth year.This data will not be stored.
          </p>

          <Button
            input={"text"}
            placeholder={"Enter your age"}
            buttonValue={"Continue"}
          />
        </div>
      </div>
    </>
  );
}

export default AgePage;

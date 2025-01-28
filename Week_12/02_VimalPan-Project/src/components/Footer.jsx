export default function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl font-extrabold tracking-tighter text-white text-center pt-4 transition-all duration-300">
          Vimal
        </h1>
        <p className="text-white text-sm font-medium tracking-tighter text-center">
          vimal cannot be held accountable for any health issues, <br />
          including cancer, that may arise from consumption.
        </p>
        <p className="text-white font-medium text-sm tracking-tighter">
          @ 2024 Bolo Zubaan Kesari. All rights reserved
        </p>
      </footer>
    </>
  );
}

export default function Hero() {
  return (
    <div className="relative flex ">
      <h1 className="absolute bottom-12 left-12 w-[22rem] text-white text-5xl">
        My Name is Mark Brodersen
      </h1>
      <div className="bg-primary-400 w-[40%]"></div>
      <img
        className="self-end w-[60%]"
        src="https://placehold.co/600x400"
        alt=""
      />
    </div>
  );
}

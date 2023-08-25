import image from "../assets/images/mottojpg.jpg";

export default function Hero() {
  return (
    <div className="relative flex ">
      <h1 className="absolute bottom-12 left-12 w-[22rem] lg:text-7xl md:w-[32rem] 2xl:text-9xl 2xl:w-[57rem] text-white text-5xl ">
        My Name is Mark Brodersen
      </h1>
      <div className="bg-primary-400 w-[40%]"></div>
      <img className="self-end w-[60%]" src={image} alt="" />
    </div>
  );
}

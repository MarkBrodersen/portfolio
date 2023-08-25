import BackDropImage from "../components/BackDropImage";
import DropImage from "../assets/images/BackDropImage2.jpg";

export default function AboutMe() {
  return (
    <div id="aboutme" className="bg-primary-100">
      <div className="w-[80%] m-auto py-12 flex flex-col md:flex-row justify-center items-center">
        <BackDropImage
          image={DropImage}
          imageAlt="Black and silver laptop computer on table"
        />
        <article className="md:ml-8 mt-6 w-[50%]">
          <h1 className="text-5xl mb-4">Hej</h1>
          <p>
            Punctual, friendly, helpful, perfectionist, technically inclined,
            and quick learner. Is words my former colleagues described me as.
            <br></br>
            Im a young newly gretuated web developer with a passion for creating
            and learning. <br />I use my spare time to keep up to date with the
            newest techlogis and coding methods to have an edge. I also spend
            time to enjoy the fantastic Danish weather to get some good energy
            to take with me to work.
          </p>
        </article>
      </div>
    </div>
  );
}

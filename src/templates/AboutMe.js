import BackDropImage from "../components/BackDropImage";

export default function AboutMe() {
  return (
    <div className="bg-primary-100">
      <div className="w-[80%] m-auto py-12 flex ">
        <BackDropImage image="https://placehold.co/200x200" imageAlt="hejsa" />
        <article className="ml-8 mt-6 w-[50%]">
          <h1 className="text-5xl mb-4">Hej</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            id necessitatibus tempore quaerat animi excepturi, autem ipsa iusto
            minus error? <br /> <br /> Ipsa inventore maxime culpa doloribus
            harum, accusamus officiis laboriosam error similique aliquam,
            placeat porro iure voluptatem? Quis voluptatibus eligendi officia
            veritatis ipsa! Neque quibusdam voluptates numquam rerum
            perferendis! Minus accusantium laudantium tempore?
          </p>
        </article>
      </div>
    </div>
  );
}

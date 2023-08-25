import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import FillerText from "../components/sub-components/FillerText";

export default function Contact() {
  return (
    <>
      <footer className="bg-primary-100 pt-12">
        <div className="flex w-[80%] m-auto">
          <article className="w-1/2">
            <div className="p-4">
              <h1 className="text-3xl">Contact Me</h1>
              <FillerText text="Write to me" />
            </div>
            <div>
              <ContactInfo info="markbro@outlook.dk" icon="mail" />
              <ContactInfo info="+45 215 386 89" icon="phone" />
            </div>
          </article>
          <ContactForm />
        </div>
      </footer>
      <div className="bg-primary-300 w-full h-12"></div>
    </>
  );
}

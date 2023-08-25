import { useRef, useState } from "react";
import ContactInfo from "../components/ContactInfo";
import FillerText from "../components/sub-components/FillerText";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [handler, setHandler] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setHandler(null);
    emailjs
      .sendForm(
        "service_vu954pn",
        "template_wzlpbrs",
        form.current,
        "jlIC7XBPlaNmtYYNg"
      )
      .then(
        (result) => {
          setHandler(true);
          console.log(result.text);
        },
        (error) => {
          setHandler(false);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <footer className="bg-primary-100 pt-12">
        <div className="flex flex-col items-center sm:flex-row w-[80%] m-auto">
          <article className="w-1/2">
            <div className="p-4 sm:w-64">
              <h1 className="text-3xl">Contact Me</h1>
              <FillerText text="I'm always open to talk so you're welcome to contact me " />
            </div>
            <div>
              <ContactInfo info="markbro@outlook.dk" icon="mail" />
              <ContactInfo info="+45 215 386 89" icon="phone" />
            </div>
          </article>
          <form className="flex flex-col w-1/2" ref={form} onSubmit={sendEmail}>
            <input
              className="py-4 px-6 my-2 border-2 border-primary-300 rounded-lg"
              type="text"
              name="user_name"
              placeholder="Name"
            />

            <input
              className="py-4 px-6 my-2 border-2 border-primary-300 rounded-lg"
              type="email"
              name="user_email"
              placeholder="Email"
            />

            <textarea
              className="py-4 px-6 my-2 border-2  border-primary-300 rounded-lg"
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            />
            <input
              className="w-64 my-4 py-4 px-6 border-2 text-white bg-primary-300 rounded-lg"
              type="submit"
              value="Send"
            />
            {handler === true ? (
              <p className="text-2xl mb-8 text-primary-300">
                Your message has been send
              </p>
            ) : handler === false ? (
              <p className="text-2xl mb-8 text-red-600">
                There seems to be an error please check your name and email is
                correct
              </p>
            ) : null}
          </form>
        </div>
      </footer>
      <div className="bg-primary-300 w-full h-12"></div>
    </>
  );
}

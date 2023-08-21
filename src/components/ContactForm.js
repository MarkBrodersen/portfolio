import FormInput from "./sub-components/FormInput";

export default function ContactForm() {
  return (
    <form className="flex flex-col w-1/2" action="">
      <FormInput placeholder="Name" type="text" />
      <FormInput placeholder="Email" type="email" />
      <textarea
        className="py-4 px-6 my-2 border-2  border-primary-300 rounded-lg"
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>
      <button className="w-64 my-4 py-4 px-6 border-2 text-white bg-primary-300 rounded-lg">
        Send
      </button>
    </form>
  );
}

const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="py-4 px-6 my-2 border-2 border-primary-300 rounded-lg"
      placeholder={placeholder}
    />
  );
};

export default FormInput;

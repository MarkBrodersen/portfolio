export default function BackDropImage({ image, imageAlt }) {
  return (
    <div className="w-72 h-72 relative">
      <div className="bg-primary-300 absolute top-0 left-0 w-64 h-64"></div>
      <img
        className="h-64 w-64 object-fill absolute bottom-0 right-0"
        src={image}
        alt={imageAlt}
      />
    </div>
  );
}

import FillerText from "./sub-components/FillerText";

export default function Case({ data }) {
  return (
    <a href="" className="flex odd:flex-row flex-row-reverse my-4 text-left">
      <img src={data.image} alt="" className="w-1/2" />
      <article className="w-1/2 px-8">
        <span>
          {data.id <= 9 ? (
            <p className="text-2xl text-primary-300 font-bold">0{data.id}</p>
          ) : (
            <p className="text-2xl text-primary-300 font-bold">{data.id}</p>
          )}
        </span>
        <h3 className="font-bold text-xl my-4">{data.heading}</h3>
        <FillerText text={data.text} />
        <span className="mt-12 block">{data.loginText}</span>
        <ul>
          <ul className="grid grid-cols-3">
            <li className="mr-4">Username</li>
            <li>Password</li>
            <li>role</li>
          </ul>
          {data &&
            data.logins.map((item) => (
              <li className="grid grid-cols-3" key={item.username}>
                <p className="pl-4 mr-12">{item.username}</p>
                <p>{item.password}</p>
                <p>{item.role}</p>
              </li>
            ))}
        </ul>
      </article>
    </a>
  );
}

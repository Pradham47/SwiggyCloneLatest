import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.statusText}</h1>
    </div>
  );
};
export default Error;

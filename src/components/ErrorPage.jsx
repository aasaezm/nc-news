import { Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  const errorMessage = error
    ? error.err.response.data.msg
    : "We can't find what you are looking for :(";
  return (
    <>
      <p>Oops, sorry! {errorMessage}</p>

      <Link to="/">Back home</Link>
    </>
  );
};

export default ErrorPage;

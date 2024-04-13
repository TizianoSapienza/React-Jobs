import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4"></FaExclamationTriangle>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist or is under construction</p>
      <Link
        to="/"
        className="text-white bg-sky-600 hover:bg-sky-500 rounded-lg px-3 py-2 mt-4 font-semibold"
      >
        Go Back
      </Link>
    </section>
  );
}

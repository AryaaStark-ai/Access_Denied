import React from "react";
import PageNotFoundImg from "../../assets/svgs/NotFound404.svg";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-4 p-4">
      <img
        src={PageNotFoundImg}
        alt="404 Page Not Found"
        className="w-11/12 md:w-1/2 h-auto"
      />
      <p className="text-3xl text-indigo-700 font-semibold">
        Oops! Page not found
      </p>
      <p className="text-2xl text-indigo-600 font-semibold">
        We are sorry, but the page you are looking for does not exist.
      </p>
      <a href={"/"}>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          Go to Home
        </button>
      </a>
      <p>
        <a href="https://www.freepik.com/free-vector/error-404-concept-landing-page_4660877.htm#fromView=search&page=1&position=15&uuid=97e32ed8-69a2-4f6c-a454-1a4953772c39">
          Image by pikisuperstar on Freepik
        </a>
      </p>
    </div>
  );
}

export default NotFoundPage;

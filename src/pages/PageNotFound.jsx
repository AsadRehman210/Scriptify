import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-semibold text-red-600">404</h1>
        <p className="text-xl text-[#0d2144] mt-4">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

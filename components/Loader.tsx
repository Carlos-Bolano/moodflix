import React from "react";

const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;

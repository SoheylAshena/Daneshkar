import { useState } from "react";

const HideShow = () => {
  const [show, setShow] = useState(true);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 p-5">
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          className="w-80 rounded-s-lg p-3 text-lg shadow-lg focus:outline-none"
          placeholder="Type something..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="rounded-e-lg bg-indigo-600 p-3 text-lg text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {show && (
        <p className={`my-5 transform text-4xl font-bold text-white`}>
          {input || "Your text will appear here..."}
        </p>
      )}
    </div>
  );
};

export default HideShow;

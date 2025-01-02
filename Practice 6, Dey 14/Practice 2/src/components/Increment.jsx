import { useState, useEffect } from "react";

const IncrementingNumber = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-500">
      <p className="text-4xl font-bold text-white">{count}</p>
    </div>
  );
};

export default IncrementingNumber;

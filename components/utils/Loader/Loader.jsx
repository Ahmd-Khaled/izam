import { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";

const Loader = ({ isLoading }) => {
  const [delayedLoading, setDelayedLoading] = useState(isLoading);

  useEffect(() => {
    let timer;
    if (!isLoading) {
      timer = setTimeout(() => setDelayedLoading(false), 1000);
    } else {
      setDelayedLoading(true);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!delayedLoading) return null;

  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <FiLoader className="text-gray-600 text-4xl animate-spin" />
    </div>
  );
};

export default Loader;

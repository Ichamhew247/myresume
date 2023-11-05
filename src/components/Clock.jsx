import { useState, useEffect } from "react";

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p className="text-lg">Date: {currentDate.toLocaleDateString()}</p>
    </div>
  );
}

export default Clock;

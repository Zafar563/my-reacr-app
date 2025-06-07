import React, { useEffect, useState } from "react";


const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setTrails((prev) => [...prev, newTrail]);

      // Qadimgi trail'larni o‘chirish (masalan: 20 ta izgacha)
      setTimeout(() => {
        setTrails((prev) => prev.slice(1));
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="trail-dot"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        ></span>
      ))}
    </>
  );
};

export default CursorTrail;

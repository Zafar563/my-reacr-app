import React, { useEffect, useRef } from "react";

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const bars = chartRef.current.querySelectorAll(".bar");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bars.forEach((bar) => {
            const targetHeight = bar.getAttribute("data-height");
            bar.style.height = targetHeight;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
  }, []);

  return (
    <div className="chart" ref={chartRef}>
      <div className="bar" data-height="60%" style={{ height: "0%" }}>
        <span>60%<br />Usability</span>
      </div>
      <div className="bar" data-height="30%" style={{ height: "0%" }}>
        <span>30%</span>
      </div>
      <div className="bar" data-height="10%" style={{ height: "0%" }}>
        <span>10%<br />Marketing</span>
      </div>
    </div>
  );
};

export default Chart;

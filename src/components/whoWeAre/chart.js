const Chart = () => {
  return (
    <div className="chart">
      <div className="bar" style={{ height: '60%' }}>
        <span>60%<br/>Usability</span>
      </div>
      <div className="bar" style={{ height: '30%' }}>
        <span>30%</span>
      </div>
      <div className="bar" style={{ height: '10%' }}>
        <span>10%<br/>Marketing</span>
      </div>
    </div>
  );
};

export default Chart;

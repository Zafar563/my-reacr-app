const Stats = () => {
  const data = [
    { label: "Years Experience", value: "24" },
    { label: "User’s Satisfaction", value: "1M" },
    { label: "Official Subscribers", value: "10k" },
  ];

  return (
    <div className="stats">
      {data.map((item, index) => (
        <div key={index} className="stat-item">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;

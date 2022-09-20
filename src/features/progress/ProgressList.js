const ProgressList = ({ arr }) => {
  let total = 0;
  arr.forEach((item) => (total += +item.value));

  return arr.map(({ name, color, value }, i) => {
    return (
      <li key={i}>
        <span className="list-color" style={{ backgroundColor: color }} />
        <div>
          {name}: {value} {`(${((value * 100) / total).toFixed(0)}%)`}
        </div>
      </li>
    );
  });
};

export default ProgressList;

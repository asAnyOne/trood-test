const ProgressBar = ({ list }) => {
  let total = 0;
  list.forEach((item) => (total += +item.value));

  return list.map((item) => {
    const arr = [];
    for (let i = 0; i < (item.value * 100) / total; i++) {
      arr.push(i);
    }
    return arr.map((ite, i) => {
      return (
        <span
          key={i}
          style={{ backgroundColor: item.color }}
          className="progressBar"
        />
      );
    });
  });
};

export default ProgressBar;

import { v4 as key } from "uuid";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { progressCreated, progressFetchingError } from "./progressSlice";

const ProgressAddForm = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    obj.id = key();
    formData.forEach((key, value) => (obj[value] = key));

    request("http://localhost:3001/progress", "POST", JSON.stringify(obj))
      .then((progress) => dispatch(progressCreated(progress)))
      .then(() => e.target.reset())
      .catch(() => dispatch(progressFetchingError()));
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" placeholder="Name" />
      </div>

      <div>
        <label htmlFor="value">Count</label>
        <input
          required
          type="text"
          name="value"
          id="value"
          placeholder="Count"
        />
      </div>

      <div>
        <label htmlFor="color">Choose color</label>
        <input required type="color" name="color" id="name" />
      </div>

      <button type="submit">Create</button>
    </form>
  );
};

export default ProgressAddForm;

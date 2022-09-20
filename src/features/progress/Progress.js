import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import { fetchProgress, selectAll } from "./progressSlice";

import "./progress.css";
import ProgressList from "./ProgressList";
import ProgressBar from "./ProgressBar";
import ProgressAddForm from "./ProgressAddForm";

const Progress = () => {
  const progressList = useSelector(selectAll);
  const progressLoadingStatus = useSelector(
    (state) => state.progress.progressLoadingStatus
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProgress());
    // eslint-disable-next-line
  }, []);

  return (
    (progressLoadingStatus === "loading" && <Spinner />) ||
    (progressLoadingStatus === "error" && <h5>loading failed</h5>) || (
      <>
        <div className="container">
          <ProgressBar list={progressList} />
        </div>
        <div className="container">
          <ul>
            <ProgressList arr={progressList} />
          </ul>
        </div>

        <div className="container">
          <ProgressAddForm />
        </div>
      </>
    )
  );
};

export default Progress;

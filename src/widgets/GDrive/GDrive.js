import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFiles, selectLoading, selectFiles } from "../../app/store/gDriveSlice";
import { useFilter, useScroll } from "../../app/hooks";
import GDriveContainer from "./GDriveContainer"
import { WidgetTitle, Spinner } from "../../components";

const GDrive = () => {
  const gDriveRef = useRef();
  const isLoading = useSelector(selectLoading);
  const gDriveFiles = useSelector(selectFiles);
  const dispatch = useDispatch();
  const filteredFiles = useFilter(gDriveFiles);
  useScroll(gDriveRef, () => dispatch(fetchFiles()), isLoading);

  return (
    <GDriveContainer>
      <WidgetTitle>
        GDrive
      </WidgetTitle>
      <ul ref={gDriveRef}>
        {
          filteredFiles.map(item => (
            <li key={item.id}>
              <div className="title">{item.title}</div>
              <div className="path">{item.path}</div>
            </li>
          ))
        }
        {isLoading && <li className="spinner"><Spinner /></li>}
      </ul>
    </GDriveContainer>
  );
}

export default GDrive;
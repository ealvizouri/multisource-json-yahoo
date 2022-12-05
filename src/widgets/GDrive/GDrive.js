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
  useScroll(gDriveRef, dispatch(fetchFiles()));

  return (
    <GDriveContainer>
      <WidgetTitle>
        GDrive
      </WidgetTitle>
      <ul ref={gDriveRef}>
        {filteredFiles && filteredFiles.length && filteredFiles.map(item => <li key={item.id}>{item.title} - {item.path}</li>)}
        {isLoading && <li className="spinner"><Spinner /></li>}
      </ul>
    </GDriveContainer>
  );
}

export default GDrive;
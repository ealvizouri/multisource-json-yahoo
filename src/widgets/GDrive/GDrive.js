import { useEffect } from "react";
import GDriveContainer from "./GDriveContainer"
import { useSelector, useDispatch } from "react-redux"; 
import { fetchFiles, selectFiles } from '../../app/store/gDriveSlice';
import { useFilter } from "../../app/hooks";

const GDrive = () => {
  const gDriveFiles = useSelector(selectFiles);
  const dispatch = useDispatch();
  const filteredFiles = useFilter(gDriveFiles);

  /* useEffect(() => {
    dispatch(fetchData({
      factoryName: 'gDrive'
    }));
  }, [dispatch]); */
  return (
    <GDriveContainer>
      GDrive
      <ul>
        {filteredFiles && filteredFiles.length && filteredFiles.map(item => <li key={item.id}>{item.title} - {item.path}</li>)}
      </ul>
    </GDriveContainer>
  )
}

export default GDrive;
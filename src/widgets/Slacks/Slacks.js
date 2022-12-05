import { useEffect } from "react";
import SlacksContainer from "./SlacksContainer"
import { useSelector, useDispatch } from "react-redux"; 
import { fetchSlackMessages, selectSlackMessages } from '../../app/store/slackSlice';
import { useFilter } from "../../app/hooks";

const Slacks = () => {
  const slackMessages = useSelector(selectSlackMessages);
  const dispatch = useDispatch();
  const filteredSlackMessages = useFilter(slackMessages);

  /* useEffect(() => {
    dispatch(fetchData({
      factoryName: 'slack'
    }));
  }, [dispatch]); */
  return (
    <SlacksContainer>
      Slacks
      <ul>
        {filteredSlackMessages && filteredSlackMessages.length && filteredSlackMessages.map(item => <li key={item.id}>{item.author} - {item.message}</li>)}
      </ul>
    </SlacksContainer>
  )
}

export default Slacks;
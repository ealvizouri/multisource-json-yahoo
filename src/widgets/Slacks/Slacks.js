import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { fetchSlackMessages, selectLoading, selectSlackMessages } from '../../app/store/slackSlice';
import { useFilter, useScroll } from "../../app/hooks";
import { WidgetTitle, Spinner } from "../../components";
import SlacksContainer from "./SlacksContainer"

const Slacks = () => {
  const slackRef = useRef();
  const isLoading = useSelector(selectLoading);
  const slackMessages = useSelector(selectSlackMessages);
  const dispatch = useDispatch();
  const filteredSlackMessages = useFilter(slackMessages);
  useScroll(slackRef, () => dispatch(fetchSlackMessages()));

  return (
    <SlacksContainer>
      <WidgetTitle>
        Slacks
      </WidgetTitle>
      <ul ref={slackRef}>
        {filteredSlackMessages.map(item => <li key={item.id}>{item.author} - {item.message}</li>)}
        {isLoading && <li><Spinner /></li>}
      </ul>
    </SlacksContainer>
  )
}

export default Slacks;
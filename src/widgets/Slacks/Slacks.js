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
  useScroll(slackRef, () => dispatch(fetchSlackMessages()), isLoading);

  return (
    <SlacksContainer>
      <WidgetTitle>
        Slacks
      </WidgetTitle>
      <ul ref={slackRef}>
        {filteredSlackMessages.map(item => (
          <li key={item.id}>
            <div className="author">{item.author} - <span>{item.channel}</span></div>
            <div className="message">{item.message}</div>
          </li>
        ))}
        {isLoading && <li className="spinner"><Spinner /></li>}
      </ul>
    </SlacksContainer>
  )
}

export default Slacks;
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import TweetsContainer from "./TweetsContainer"
import { fetchTweets, selectLoading, selectTweets } from '../../app/store/twitterSlice';
import { WidgetTitle, Spinner } from '../../components';
import { useFilter, useScroll } from "../../app/hooks";

const Tweets = () => {
  const tweetsRef = useRef();
  const isLoading = useSelector(selectLoading);
  const tweets = useSelector(selectTweets);
  const dispatch = useDispatch();
  const filteredTweets = useFilter(tweets);
  useScroll(tweetsRef, () => dispatch(fetchTweets()));

  return (
    <TweetsContainer>
      <WidgetTitle>
        Tweets
      </WidgetTitle>
      <ul ref={tweetsRef}>
        {filteredTweets.map(item => (
          <li key={item.timestamp}>
            <div className="username">{item.user}</div>
            <div className="tweet">{item.message}</div>
          </li>
        ))}
        {isLoading && <li className="spinner"><Spinner /></li>}
      </ul>
    </TweetsContainer>
  )
}

export default Tweets;
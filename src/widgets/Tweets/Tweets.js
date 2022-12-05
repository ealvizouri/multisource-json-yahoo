import { useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import TweetsContainer from "./TweetsContainer"
import { fetchTweets, selectLoading, selectTweets } from '../../app/store/twitterSlice';
import { WidgetTitle } from '../../components';
import { useFilter } from "../../app/hooks";

const Tweets = () => {
  const tweetsRef = useRef();
  const isLoading = useSelector(selectLoading);
  const tweets = useSelector(selectTweets);
  const dispatch = useDispatch();
  const filteredTweets = useFilter(tweets);
  const handleScroll = useCallback(() => {
    const { current } = tweetsRef;
    if (current) {
      //console.log(current.scrollHeight, current.scrollTop, current.offsetHeight);
      if (current.scrollTop !== (current.scrollHeight -current.offsetHeight)) return;
      console.log('Fetch items!');
      dispatch(fetchTweets({}));
    }
  }, [dispatch]);

  useEffect(() => {
    const { current } = tweetsRef;
    if (current) {
      current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener('scroll', handleScroll);
      }
    }
  }, [handleScroll]);


  /* useEffect(() => {
    dispatch(fetchData({
      factoryName: 'tweet'
    }));
  }, [dispatch]); */
  if (!filteredTweets || filteredTweets.length)
  return (
    <TweetsContainer>
      <WidgetTitle>
        Tweets
      </WidgetTitle>
      <ul ref={tweetsRef}>
        {filteredTweets && filteredTweets.length && filteredTweets.map(item => (
          <li key={item.timestamp}>
            <div className="username">{item.user}</div>
            <div className="tweet">{item.message}</div>
          </li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
    </TweetsContainer>
  )
}

export default Tweets;
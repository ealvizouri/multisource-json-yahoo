import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './app/store';
import router from './app/router';
import './App.css';

import ContactFactory from './sources/ContactFactory';
import GDriveFactory from './sources/GDriveFactory';
import ImageFactory from './sources/ImageFactory';
import TweetFactory from './sources/TweetFactory';
import SlackFactory from './sources/SlackFactory';

const contactFactory = new ContactFactory();
const gDriveFactory = new GDriveFactory();
const imageFactory = new ImageFactory();
const tweetFactory = new TweetFactory();
const slackFactory = new SlackFactory('Yahoo');


console.log(contactFactory.makeSome(1).pop());

console.log(imageFactory.makeSome(1).pop());

console.log(tweetFactory.makeSome(1).pop());

console.log(slackFactory.makeSome(1).pop());

console.log(gDriveFactory.makeSome(1).pop());

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

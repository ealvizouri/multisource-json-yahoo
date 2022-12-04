import Factory from './Factory';
import { faker } from '@faker-js/faker';

class TweetFactory extends Factory {
  defineProps() {
    this.props.set(
      'user',
      () => {
        const username = faker.internet.userName();
        this.addMatchingTerm(username.split('_'));
        return `@${username}`;
      }
    );
    this.props.set(
      'message',
      () => {
        const words = faker.random.words(faker.datatype.number({ min: 10,  max: 40 }));
        this.addMatchingTerm(words.split(' ').slice(0, 3));
        return words;
      }
    );
    this.props.set(
      'timestamp',
      () => faker.date.recent(0)
    );
  }
}

export default TweetFactory;
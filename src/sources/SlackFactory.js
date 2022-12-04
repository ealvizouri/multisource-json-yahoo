import Factory from './Factory';
import { faker } from '@faker-js/faker';

class SlackFactory extends Factory {
  constructor(companyName) {
    super({
      companyName
    });
  }
  defineProps() {
    this.props.set(
      'id',
      () => faker.datatype.number({ min: 1000 })
    );
    this.props.set(
      'channel',
      () => {
        let { companyName } = this.additionalProps;
        companyName = companyName?.toLowerCase() ?? '';
        const department = faker.commerce.department().toLowerCase();
        this.addMatchingTerm(companyName);
        this.addMatchingTerm(department);
        return `${companyName}-${department}`;
      }
    );
    this.props.set(
      'author',
      () => {
        const firstName = faker.name.firstName();
        this.addMatchingTerm(firstName);
        return firstName;
      }
    );
    this.props.set(
      'message',
      () => {
        const words = faker.random.words();
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

export default SlackFactory;
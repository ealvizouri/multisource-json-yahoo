import Factory from './Factory';
import { faker } from '@faker-js/faker';

class ContactFactory extends Factory {
  constructor() {
    super();
    this.defineProps();
  }

  defineProps() {
    this.props.set(
      'id',
      () => faker.datatype.number({ min: 1000 })
    );
    this.props.set(
      'name',
      () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        this.addMatchingTerm(firstName);
        this.addMatchingTerm(lastName);
        return `${firstName} ${lastName}`;
      }
    );
    this.props.set(
      'company',
      () => {
        const companyName = faker.company.name();
        this.addMatchingTerm(companyName.substring(0, companyName.indexOf(' ')));
        return companyName;
      }
    );
    this.props.set(
      'emails',
      () => {
        const emails = this.repeat({
          fn: () => faker.internet.email(),
          min: 1,
          max: 3
        });

        emails.forEach(email => {
          this.addMatchingTerm(email.substring(0, email.indexOf('@')));
        });

        return emails;
      }
    );
    this.props.set(
      'phones',
      () => this.repeat({
        fn: () => faker.phone.number(),
        min: 1,
        max: 3
      })
    );
    this.props.set(
      'last_contact',
      () => faker.date.recent(1)
    );
  }
}

export default ContactFactory;
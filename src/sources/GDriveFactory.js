import Factory from './Factory';
import { faker } from '@faker-js/faker';

class GDriveFactory extends Factory {
  defineProps() {
    this.props.set(
      'id',
      () => faker.datatype.number({ min: 1000000 })
    );
    this.props.set(
      'path',
      () => {
        const fileNameWithExt = faker.system.commonFileName();
        const fileName = fileNameWithExt.substring(0, fileNameWithExt.indexOf('.'));
        this.addMatchingTerm(fileName);
        return `${faker.system.directoryPath()}/${fileNameWithExt}`
      }
    );
    this.props.set(
      'title',
      () => faker.random.words(5)
    );
    this.props.set(
      'shared_with',
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
      'created',
      () => faker.date.recent(faker.datatype.number({ min: 1, max: 5 })).toISOString()
    );
  }
}

export default GDriveFactory;
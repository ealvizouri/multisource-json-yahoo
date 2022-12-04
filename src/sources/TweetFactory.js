import Factory from './Factory';
import { faker } from '@faker-js/faker';

class TweetFactory extends Factory {
  constructor() {
    super({
      props: {
        user: {
          prefix: '@',
          rules: ['internet.userName'],
          separator: '',
          matchingTermCallback: (obj) => obj.replace('@', '').split('_')
        },
        message: {
          rules: [
            {
              rule: 'random.words',
              args: () => faker.datatype.number({ min: 10,  max: 40 })
            }
          ],
          separator: '/',
          matchingTermCallback: (obj) => obj.split(' ').slice(0, 3)
        },
        timestamp: {
          rules: [
            {
              rule: 'date.recent',
              args: 0
            }
          ]
        }
      },
      matchingSources: [
        'user',
        'message'
      ],
    });
  }
}

export default TweetFactory;
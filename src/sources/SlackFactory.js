import Factory from './Factory';
import { faker } from '@faker-js/faker';

class SlackFactory extends Factory {
  constructor(companyName) {
    super({
      props: {
        id: {
          rules: [
            {
              rule:'datatype.number',
              args: {
                min: 1000
              }
            }
          ]
        },
        channel: {
          prefix: companyName,
          rules: ['commerce.department'],
          separator: '-',

        },
        author: {
          rules: ['name.firstName'],
        },
        message: {
          rules: [
            {
              rule: 'random.words',
              args: () => faker.datatype.number({ min: 10,  max: 40 })
            },
            'git.commitMessage',
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
        'channel',
        'author',
        'message'
      ],
    });
  }
}

export default SlackFactory;
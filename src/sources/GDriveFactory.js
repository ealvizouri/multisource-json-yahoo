import Factory from './Factory';
import { faker } from '@faker-js/faker';

class GDriveFactory extends Factory {
  constructor() {
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
        path: {
          rules: [
            'system.directoryPath',
            'system.commonFileName',
          ],
          separator: '/',
          matchingTermCallback: (obj) => obj.split('/').pop()
        },
        title: {
          rules: [
            {
              rule: 'random.words',
              maxRepeat: 5
            }
          ]
        },
        shared_with: {
          rules: ['internet.email'],
          maxRepeat: 3
        },
        created: {
          rules: [
            {
              rule: 'date.recent',
              args: faker.datatype.number({ min: 1, max: 5 })
            }
          ]
        }
      },
      matchingSources: [
        'path',
        'title',
        'shared_with'
      ]
    });
  }
}

export default GDriveFactory;
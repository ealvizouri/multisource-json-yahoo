import Factory from './Factory';
import { faker } from '@faker-js/faker';

class ImageFactory extends Factory {
  constructor() {
    const dimmensions = [
      [640, 480], // [width, height]
      [480, 600],
    ]
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
        image: {
          rules: [
            {
              rule: 'image.image',
              args: () => {
                const dimmensionIndex = faker.datatype.number({ min: 0, max: dimmensions.length - 1 });
                return [
                  ...dimmensions[dimmensionIndex],
                  true, // randomize
                ];
              }
            }
          ],
          separator: '/',
          matchingTermCallback: (obj) => obj.split('/').pop().split('?').shift()
        },
        description: {
          rules: [
            {
              rule: 'random.words',
              args: faker.datatype.number({ min: 5, max: 10 })
            }
          ]
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
        'image',
        'description'
      ],
      orderKeys: [
        'id',
        'image',
        'description',
        'created'
      ]
    });
  }
}

export default ImageFactory;
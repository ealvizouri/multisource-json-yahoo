import Factory from './Factory';
import { faker } from '@faker-js/faker';

class ImageFactory extends Factory {
  defineProps() {
    const dimmensions = [
      [640, 480], // [width, height]
      [480, 600],
    ]
    this.props.set(
      'id',
      () => faker.datatype.number({ min: 1000000 })
    );
    this.props.set(
      'image',
      () => {
        const randomIndex = faker.datatype.number({ min: 0, max: dimmensions.length - 1 });
        const [w, h] = dimmensions[randomIndex];
        const image = faker.image.image(w, h, true);
        this.addMatchingTerm(image.split('/').pop().split('?').shift());
        return image;
      }
    );
    this.props.set(
      'description',
      () => {
        const description = faker.random.words(faker.datatype.number({ min: 2, max: 5 }));
        this.addMatchingTerm(description.split(' '));
        return description;
      }
    );
    this.props.set(
      'created',
      () => faker.datatype.number({ min: 1, max: 5 })
    );
  }
}

export default ImageFactory;
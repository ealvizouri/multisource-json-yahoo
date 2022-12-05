import { faker } from '@faker-js/faker';
import BrowserLog from '../BrowserLog';

class Factor extends BrowserLog {
  constructor(additionalProps, logOn = false) {
    super(logOn);
    this.props = new Map();
    this.additionalProps = additionalProps;
    this.currentEntity = null;
    this.defineProps();
  }

  make() {
    const entity = {
      matching_terms: []
    };
    this.currentEntity = entity;
    this.props.forEach((faker, key) => {
      entity[key] = faker(entity);
    });
    this.currentEntity = null;
    return entity;
  }

  makeSome(max = 100, precise = false) {
    return this.repeat({
      fn: () => this.make(),
      min: 1,
      max,
      precise
    });
  }

  repeat({ fn, min, max, precise}) {
    const repetitions = [];
    const limit = max && precise ? max : faker.datatype.number({ min, max });
    for (let i = 0; i < limit; i++) {
      repetitions.push(fn(i));
    }
    return repetitions;
  }

  addMatchingTerm(matchingTerm) {
    if (!this.currentEntity) {
      console.error('There\'s no currentEntity selected');
      return;
    }
    if (Array.isArray(matchingTerm)) {
      this.currentEntity.matching_terms = [...this.currentEntity.matching_terms, ...matchingTerm];
    } else {
      this.currentEntity.matching_terms.push(matchingTerm);
    }
  }
  
  defineProps() {}
}

export default Factor;
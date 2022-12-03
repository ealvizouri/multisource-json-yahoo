import { faker } from '@faker-js/faker';

/* 
{
  id: {
    datatype: 'uui'
  },
  "name": {
    name: 'firstName',
    name: 'lastName',
  },
  "company": {
    company: 'name'
  },
  "emails": [
    {
      internet: 'email'
    }
  ],
  "phones": [
    "650-555-5555",
    "+44 171 5555 5555"
  ],
  "matching_terms": ["yahoo", "john", "john", "doe"],
  "last_contact": {
    date: 'recent'
  }
}
*/

class Factory {
  props = {};

  constructor(props) {
    this.props = props;
  }

  make() {
    const entity = {};
    Object.keys(this.props).forEach(key => {
      entity[key] = this.props[key];
    })
    const [prop, fk1, fk2, fk3] = args;
    let fk = faker.phone;
  }

  interpretObject(obj, separator = ' ') {
    const output = [];
    try {
      if (Array.isArray(obj[key])) {
        obj[key].forEach(item => {

        });
      } else {
        Object.keys(obj).forEach(key => {});
      }
    } catch (e) {
      console.error(e);
    }
    return output.join(separator);
  }

  getFirstName() {
    return faker.name.firstName;
  }
  getLastName() {
    return faker.name.lastName;
  }
  getDate() {
    return faker.date.recent();
  }
}

export default Factory;
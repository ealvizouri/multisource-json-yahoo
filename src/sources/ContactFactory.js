import Factory from './Factory';

class ContactFactory extends Factory {
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
        name: {
          rules: [
            'name.firstName',
            'name.lastName'
          ]
        },
        company: {
          rules: ['company.name']
        },
        emails: {
          rules: ['internet.email'],
          maxRepeat: 3
        },
        phones: {
          rules: ['phone.number'],
          maxRepeat: 2
        },
        /* matching_terms: {
          auto: true
        }, // ["yahoo", "john", "john", "doe"], */
        last_contact: {
          rules: [
            {
              rule: 'date.recent',
              args: 1
            }
          ]
        }
      },
      matchingSources: [
        'name',
        'company',
        'emails'
      ]
    });
  }
}

export default ContactFactory;
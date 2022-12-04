import { faker } from '@faker-js/faker';

class Factory {
  constructor({ 
    props = {},
    matchingSources = [],
    defaultSeparator = ' ',
    logOn = false,
    orderKeys = null
  }) {
    this.props = props;
    this.matchingSources = matchingSources;
    this.defaultSeparator = defaultSeparator;
    this.logOn = logOn;
    this.orderKeys = orderKeys;
    this.currentEntity = null;
  }

  getSeparator(obj) {
    return obj.separator ?? this.defaultSeparator;
  }

  make() {
    const entity = {
      matching_terms: []
    };
    this.currentEntity = entity;
    const keys = this.orderKeys ?? Object.keys(this.props);
    keys.filter(key => key !== 'matching_terms').forEach(key => {
      entity[key] = this.processObject(this.props[key]);
      if (this.matchingSources.includes(key)) {
        this.addMatchingTerm(entity[key], entity, key);
      }
    });
    this.currentEntity = null;
    return entity;
  }

  makeSome(max) {
    const entities = [];
    const limit = max ?? faker.datatype.number({ min: 1, max: 100 });
    for (let i = 0; i < limit; i++) {
      entities.push(this.make());
    }
    return entities;
  }

  processObject(obj) {
    const separator = this.getSeparator(obj);
    if (obj.maxRepeat > 1) {
      const results = [];
      for (let i = 0; i < faker.datatype.number({ min: obj.minRepeat ?? 1, max: obj.maxRepeat }); i++) {
        results.push(this.processRules(obj.rules, separator, obj.prefix));
      }
      return results;
    }
    return this.processRules(obj.rules, separator, obj.prefix);
  }

  processRules(rules, separator, prefix) {
    return rules.reduce((prev, curr) => {
      return [...prev, this.processRule(curr)];
    }, prefix ? [prefix] : []).join(separator);
  }

  normalizeRule(rule) {
    if (typeof rule === 'string') {
      return {
        rule,
        args: []
      }
    }
    return rule;
  }

  processRule(rule) {
    const nRule = this.normalizeRule(rule);
    this.logGroup('rule: ', nRule.rule);
    const ruleParts = nRule.rule.split('.');

    let fk = faker;
    for (let i = 0; i < ruleParts.length; i++) {
      this.log(ruleParts[i]);
      fk = fk[ruleParts[i]];
    }
    this.log('fk', typeof fk);
    if (typeof fk === 'function') {
      this.log(fk.name);
      if (typeof nRule.args === 'function') {
        const generatedArgs = nRule.args(this.currentEntity);
        fk = Array.isArray(generatedArgs) ? fk(...generatedArgs) : fk(generatedArgs);
      } else if (Array.isArray(nRule.args)) {
        fk = fk(...nRule.args);
      } else {
        fk = fk(nRule.args);
      }
    }
    this.logGroupEnd();
    return fk;
  }

  addMatchingTerm(obj, entity, key) {
    if (Array.isArray(obj)) {
      obj.forEach(item => this.addMatchingTerm(item, entity, key));
    } else {
      entity.matching_terms = [
        ...entity.matching_terms,
        ...this.matchingTermCallback(obj, key)
      ];
    }
  }
  
  matchingTermCallback(obj, key) {
    if (typeof this.props[key]?.matchingTermCallback === 'function') {
      const res = this.props[key].matchingTermCallback(obj);
      return Array.isArray(res) ? res : [res];
    }
    return obj.split(' ');
  }

  log(args) {
    if (this.logOn) {
      console.log(...args);
    }
  }

  logGroup(args) {
    if (this.logOn) {
      console.group(...args);
    }
  }

  logGroupEnd() {
    if (this.logOn) {
      console.groupEnd();
    }
  }
}

export default Factory;
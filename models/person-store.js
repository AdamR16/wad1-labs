'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const personStore = {

  store: new JsonStore('./models/person-store.json', { info: {} }),
  collection: 'employees',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

};

export default personStore;
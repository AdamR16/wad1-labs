'use strict';

import logger from "../utils/logger.js";
import personStore from "../models/person-store.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the playlist app",
      employee: personStore.getAppInfo()
    };
    
    
    response.render('about', viewData);
  },
};

export default about;

'use strict';

/**
 * scd service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scd.scd');

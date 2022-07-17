'use strict';

/**
 * masl service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::masl.masl');

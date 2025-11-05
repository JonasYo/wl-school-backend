'use strict';

/**
 * site controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::site.site', ({ strapi }) => ({
  async find(ctx) {
    if (ctx.query.populate === 'deep' || ctx.query.populate === '*') {
      ctx.query.populate = {
        seo: {
          populate: {
            shareImage: true,
          },
        },
        favicon: true,
      };
    }

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    if (ctx.query.populate === 'deep' || ctx.query.populate === '*') {
      ctx.query.populate = {
        seo: {
          populate: {
            shareImage: true,
          },
        },
        favicon: true,
      };
    }

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));

'use strict';

/**
 * page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    if (ctx.query.populate === 'deep' || ctx.query.populate === '*') {
      ctx.query.populate = {
        content: {
          on: {
            'sections.hero-section': {
              populate: {
                image: {
                  populate: {
                    mobile: true,
                    tablet: true,
                    desktop: true,
                  },
                },
                button: true,
              },
            },
            'sections.segments-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.teaching-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.card-section': {
              populate: '*',
            },
            'sections.activities-section': {
              populate: '*',
            },
            'sections.slider-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.gallery-section': {
              populate: '*',
            },
            'sections.cta-section': {
              populate: {
                image: {
                  populate: {
                    mobile: true,
                    tablet: true,
                    desktop: true,
                  },
                },
                card: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.testimonial-section': {
              populate: '*',
            },
          },
        },
        site: {
          populate: {
            seo: {
              populate: {
                shareImage: true,
              },
            },
            favicon: true,
          },
        },
      };
    }

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    if (ctx.query.populate === 'deep' || ctx.query.populate === '*') {
      ctx.query.populate = {
        content: {
          on: {
            'sections.hero-section': {
              populate: {
                backgroundImage: true,
                button: true,
              },
            },
            'sections.segments-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.teaching-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.card-section': {
              populate: '*',
            },
            'sections.activities-section': {
              populate: '*',
            },
            'sections.slider-section': {
              populate: {
                cards: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.gallery-section': {
              populate: '*',
            },
            'sections.cta-section': {
              populate: {
                image: true,
                card: {
                  populate: {
                    image: true,
                    button: true,
                  },
                },
              },
            },
            'sections.testimonial-section': {
              populate: '*',
            },
          },
        },
        site: {
          populate: {
            seo: {
              populate: {
                shareImage: true,
              },
            },
            favicon: true,
          },
        },
      };
    }

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));

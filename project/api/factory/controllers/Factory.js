'use strict';

/**
 * Factory.js controller
 *
 * @description: A set of functions called "actions" for managing `Factory`.
 */

module.exports = {

  /**
   * Retrieve factory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.factory.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a factory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.factory.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an factory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.factory.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an factory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.factory.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an factory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.factory.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};

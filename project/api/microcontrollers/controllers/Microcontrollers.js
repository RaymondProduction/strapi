'use strict';

/**
 * Microcontrollers.js controller
 *
 * @description: A set of functions called "actions" for managing `Microcontrollers`.
 */

module.exports = {

  /**
   * Retrieve microcontrollers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.microcontrollers.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a microcontrollers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.microcontrollers.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an microcontrollers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.microcontrollers.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an microcontrollers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.microcontrollers.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an microcontrollers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.microcontrollers.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};

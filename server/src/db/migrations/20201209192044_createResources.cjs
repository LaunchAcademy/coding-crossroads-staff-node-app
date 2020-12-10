/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("resources", (table) => {
    table.bigIncrements("id");
    table.string("title").notNullable()
    table.text("description").notNullable()
    table.string("url")
    table.string("resourceType").notNullable()
  })
};

/**
 * @param {Knex} knex
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources")
};

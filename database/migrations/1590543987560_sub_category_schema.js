"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SubCategorySchema extends Schema {
  up() {
    this.create("sub_categories", (table) => {
      table.increments();
      table.string("name");
      table.boolean("active");
      table
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("sub_categories");
  }
}

module.exports = SubCategorySchema;

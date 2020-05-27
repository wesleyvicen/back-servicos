"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategoryUserSchema extends Schema {
  up() {
    this.create("professional_sub_category", (table) => {
      table.increments();
      table
        .integer("sub_category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE");
      table
        .integer("professional_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("professionals")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("professional_sub_category");
  }
}

module.exports = CategoryUserSchema;

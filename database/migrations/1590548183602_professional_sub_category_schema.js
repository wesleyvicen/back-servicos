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
        .inTable("sub_categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("professional_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("professionals")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("professional_sub_category");
  }
}

module.exports = CategoryUserSchema;

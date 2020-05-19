"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfessionSchema extends Schema {
  up() {
    this.create("professions", (table) => {
      table.increments();
      table.string("name");
      table.string("urlImage");
      table.boolean("active");
      table.timestamps();
    });
  }

  down() {
    this.drop("professions");
  }
}

module.exports = ProfessionSchema;

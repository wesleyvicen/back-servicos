"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfessionalSchema extends Schema {
  up() {
    this.create("professionals", (table) => {
      table.increments();
      table.string("name");
      table.string("urlImage").defaultTo("https://i.imgur.com/72qUAcc.png");
      table.string("description");
      table.boolean("active");
      table.timestamps();
    });
  }

  down() {
    this.drop("professionals");
  }
}

module.exports = ProfessionalSchema;

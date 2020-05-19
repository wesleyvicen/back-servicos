"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ContactSchema extends Schema {
  up() {
    this.create("contacts", (table) => {
      table.increments();
      table.string("num");
      table.boolean("whatsapp");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("contacts");
  }
}

module.exports = ContactSchema;

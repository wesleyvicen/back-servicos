"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

// const { profission_type } = require("../enums");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("name");
      table.string("urlImage");
      table.boolean("active");
      /*
      table.enu(
        "profission_type",
        profission_type.map((item) => item.key)
      );
      */
      table.string("servicos");
      table
        .integer("profession_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("professions")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;

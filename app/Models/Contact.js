"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Contact extends Model {
  users() {
    return this.belongsTo("App/Models/User");
  }

  static fillable() {
    return ["num", "whatsapp", "user_id"];
  }
}

module.exports = Contact;

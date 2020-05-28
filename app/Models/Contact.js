"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Contact extends Model {
  professional() {
    return this.belongsTo("App/Models/Professional");
  }

  static fillable() {
    return ["num", "whatsapp", "professional_id"];
  }
}

module.exports = Contact;

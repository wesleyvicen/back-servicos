"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Contact extends Model {
  static fillable() {
    return ["num", "whatsapp", "user_id"];
  }
}

module.exports = Contact;

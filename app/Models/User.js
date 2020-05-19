"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class User extends Model {
  professions() {
    return this.belongsTo("App/Models/Profession");
  }

  contacts() {
    return this.hasMany("App/Models/Contact");
  }

  static fillable() {
    return ["name", "urlImage", "active", "servicos", "profession_id"];
  }
}

module.exports = User;

"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Profession extends Model {
  users() {
    return this.hasMany("App/Models/User");
  }

  static fillable() {
    return ["name", "urlImage", "active"];
  }
}

module.exports = Profession;

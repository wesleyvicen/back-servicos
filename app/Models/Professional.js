"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Professional extends Model {
  subCategories() {
    return this.belongsToMany("App/Models/SubCategory");
  }
  static fillable() {
    return ["name", "urlImage", "description", "active", "subCategories"];
  }
}

module.exports = Professional;

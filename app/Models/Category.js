"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  sub_categories() {
    return this.hasMany("App/Models/SubCategory");
  }

  static fillable() {
    return ["name", "urlImage", "active"];
  }
}

module.exports = Category;

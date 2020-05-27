"use strict";

const Category = use("App/Models/Category");
class CategoryController {
  async index({ request, response, view }) {
    const category = await Category.all();
    return category;
  }

  async store({ request, response }) {
    const data = request.only(Category.fillable());
    const category = await Category.create(data);
    return category;
  }

  async show({ params, request, response, view }) {
    const category = await Category.find(params.id);
    return category;
  }

  async update({ params, request, response }) {
    const data = request.only(Category.fillable());
    const category = await Category.find(params.id);

    category.merge(data);
    await category.save();
    return category;
  }

  async destroy({ params, request, response }) {
    const category = await Category.find(params.id);
    await category.delete();
  }
}

module.exports = CategoryController;

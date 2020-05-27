"use strict";

const SubCategory = use("App/Models/SubCategory");

class SubCategoryController {
  async index({ params: { id }, request, response, view }) {
    const { page = 1, limit = 10 } = request.headers();
    const sub = await SubCategory.query()
      .where({ category_id: id })
      .paginate(page, limit);
    return sub;
  }

  async store({ request, response }) {
    const data = request.only(SubCategory.fillable());

    const sub = await SubCategory.create({
      ...data,
      category_id: request.params.id,
    });

    return response.status(201).send(sub);
  }
  async show({ params, request, response }) {
    const { idx, id } = request.params;
    const sub = await SubCategory.query()
      .where({
        id: id,
        category_id: idx,
      })
      .with("sub_categories")
      .first();

    if (sub === null) return response.status(404).send();

    return sub;
  }

  async update({ params, request, response }) {
    const data = request.only(SubCategory.fillable());

    const { idx, id } = request.params;

    const sub = await SubCategory.query()
      .where({
        id: id,
        category_id: idx,
      })
      .first();

    if (sub === null) return response.status(404).send();

    sub.merge(data);

    await sub.save();

    return sub;
  }
  async destroy({ params, request, response }) {
    const { idx, id } = request.params;
    const sub = await SubCategory.query()
      .where({
        id: id,
        category_id: idx,
      })
      .first();

    if (sub === null) return response.status(404).send();

    await sub.delete();

    return sub.id;
  }
}

module.exports = SubCategoryController;

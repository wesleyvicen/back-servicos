"use strict";
const Professional = use("App/Models/Professional");

class ProfessionController {
  async index({ request, response, view }) {
    const professional = await Professional.all();
    return professional;
  }

  async store({ request, response }) {
    const { subCategories, ...data } = request.only(Professional.fillable());
    const professional = await Professional.create(data);
    if (subCategories && subCategories.length > 0) {
      await professional.subCategories().attach(subCategories);
      await professional.fetch();
    }
    return professional;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ProfessionController;

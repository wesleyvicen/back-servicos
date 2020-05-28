"use strict";
const Professional = use("App/Models/Professional");
const SubCategory = use("App/Models/SubCategory");
const Contact = use("App/Models/Contact");

class ProfessionController {
  async index({ request, response, view }) {
    const { page = 1, limit = 10 } = request.headers();
    const subCategory = await SubCategory.findOrFail(request.params.id);
    const professional = await subCategory
      .professional()
      .with("contact")
      .paginate(page, limit);
    return professional;
  }

  async store({ request, response }) {
    const { subCategories, ...data } = request.only(Professional.fillable());
    const professional = await Professional.create(data);
    if (subCategories && subCategories.length > 0) {
      await professional.subCategories().attach(subCategories);
      await professional.load("subCategories");
    }
    return professional;
  }

  async storeContact({ request, response }) {
    const data = request.only(Contact.fillable());
    const contact = await Contact.create(data);
    return contact;
  }

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {
    const professional = await Professional.findOrFail(params.id);
    const { subCategories, ...data } = request.only(Professional.fillable());
    professional.merge(data);
    await professional.save();

    if (subCategories && subCategories.length > 0) {
      await professional.subCategories().sync(subCategories);
      await professional.load("subCategories");
    }
    return professional;
  }

  async destroy({ params, request, response }) {}
}

module.exports = ProfessionController;

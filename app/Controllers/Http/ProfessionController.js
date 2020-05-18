"use strict";
const Profession = use("App/Models/Profession");
class ProfessionController {
  async index({ request, response, view }) {
    const profession = await Profession.all();
    return profession;
  }

  async store({ request, response }) {
    const data = request.only(Profession.fillable());
    const profession = await Profession.create(data);
    return profession;
  }

  async show({ params, request, response, view }) {
    const profession = await Profession.find(params.id);
    return profession;
  }

  async update({ params, request, response }) {
    const data = request.only(Profession.fillable());
    const profession = await Profession.find(params.id);

    profession.merge(data);
    await profession.save();
    return profession;
  }

  async destroy({ params, request, response }) {
    const profession = await Profession.find(params.id);
    await profession.delete();
  }
}

module.exports = ProfessionController;

"use strict";

const Profession = use("App/Models/Profession");
const User = use("App/Models/User");
const Contact = use("App/Models/Contact");

class UserController {
  /*
  async index({ params, request, response }) {

    const { page = 1, limit = 10 } = request.headers();

    const profession = await Profession.findOrFail(request.params.id);

    const user = await profession.users().paginate(page, limit);
    return user
    ;
  }
  */

  async index({ params: { id }, request, response, view }) {
    const { page = 1, limit = 10 } = request.headers();
    const user = await User.query()
      .where({ profession_id: id })
      .with("contacts")
      .paginate(page, limit);
    return user;
  }

  async store({ request, response }) {
    const data = request.only(User.fillable());

    const user = await User.create({
      ...data,
      profession_id: request.params.id,
    });

    return response.status(201).send(user);
  }

  async storeContact({ request, response }) {
    const data = request.only(Contact.fillable());
    const contact = await Contact.create(data);
    return contact;
  }

  async show({ params, request, response }) {
    const { idx, id } = request.params;
    const user = await User.query()
      .where({
        id: id,
        profession_id: idx,
      })
      .with("users")
      .first();

    if (user === null) return response.status(404).send();

    return user;
  }

  async update({ params, request, response }) {
    const data = request.only(User.fillable());

    const { idx, id } = request.params;

    const user = await user
      .query()
      .where({
        id: id,
        profession_id: idx,
      })
      .first();

    if (user === null) return response.status(404).send();

    user.merge(data);

    await user.save();

    return user;
  }

  async destroy({ params, request, response }) {
    const { idx, id } = request.params;
    const user = await User.query()
      .where({
        id: id,
        profession_id: idx,
      })
      .first();

    if (user === null) return response.status(404).send();

    await user.delete();

    return user.id;
  }
}

module.exports = UserController;

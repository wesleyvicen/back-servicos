"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contacts
 */
const Provider = use("App/Models/Provider");
const Contact = use("App/Models/Contact");

class ContactController {
  async index({ request, response, view }) {
    const { page = 1, limit = 10 } = request.headers();

    const provider = await Provider.findOrFail(request.params.idx);

    const contacts = await provider.contacts().paginate(page, limit);

    return contacts;
  }

  async store({ request, response }) {
    const data = request.only(Contact.fillable());

    const contact = await Contact.create({
      ...data,
      provider_id: request.params.idx,
    });

    return response.status(201).send(contact);
  }

  async show({ params, request, response, view }) {
    const { idx, id } = request.params;
    const contact = await Contact.query()
      .where({
        id: id,
        provider_id: idx,
      })
      .with("annotations")
      .first();

    if (contact === null) return response.status(404).send();

    return contact;
  }

  async update({ params, request, response }) {
    const data = request.only(Contact.fillable());

    const { idx, id } = request.params;

    const contact = await Contact.query()
      .where({
        id: id,
        provider_id: idx,
      })
      .first();

    if (contact === null) return response.status(404).send();

    contact.merge(data);

    await contact.save();

    return contact;
  }

  async destroy({ params, request, response }) {
    const { idx, id } = request.params;
    const contact = await Contact.query()
      .where({
        id: id,
        provider_id: idx,
      })
      .first();

    if (contact === null) return response.status(404).send();

    await contact.delete();

    return contact.id;
  }
}

module.exports = ContactController;

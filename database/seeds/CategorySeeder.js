"use strict";

/*
|--------------------------------------------------------------------------
| CategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Category = use("App/Models/Category");

class CategorySeeder {
  async run() {
    await Category.createMany([
      {
        id: 1,
        name: "Assist. Técnica",
        urlImage: "https://i.imgur.com/wSzyCS4.png",
        active: true,
      },
      {
        id: 2,
        name: "Reformas",
        urlImage: "https://i.imgur.com/5sgJZ1Z.png",
        active: true,
      },
      {
        id: 3,
        name: "Eventos",
        urlImage: "https://i.imgur.com/en4KHph.png",
        active: true,
      },
      {
        id: 4,
        name: "Serviços Domésticos",
        urlImage: "https://i.imgur.com/wg6AMVb.png",
        active: true,
      },
      {
        id: 5,
        name: "Aulas",
        urlImage: "https://i.imgur.com/8susTMO.png",
        active: true,
      },
      {
        id: 6,
        name: "Moda e Beleza",
        urlImage: "https://i.imgur.com/cdezaxh.png?1",
        active: true,
      },
      {
        id: 7,
        name: "Design e Tecnologia",
        urlImage: "https://i.imgur.com/2ypY0YT.png",
        active: true,
      },
      {
        id: 8,
        name: "Saúde",
        urlImage: "https://i.imgur.com/p1cFG8H.png",
        active: true,
      },
    ]);
  }
}

module.exports = CategorySeeder;

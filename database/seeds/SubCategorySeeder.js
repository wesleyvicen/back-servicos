"use strict";

/*
|--------------------------------------------------------------------------
| SubCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const SubCategory = use("App/Models/SubCategory");

class SubCategorySeeder {
  async run() {
    await SubCategory.createMany([
      {
        id: 1,
        name: "Aparelho de som",
        active: true,
        category_id: "1",
      },
      {
        id: 2,
        name: "Aquecedor de Gás",
        active: true,
        category_id: "1",
      },
      {
        id: 3,
        name: "Ar condicionado",
        active: true,
        category_id: "1",
      },
      {
        id: 4,
        name: "Cabeamento e Redes",
        active: true,
        category_id: "1",
      },
      {
        id: 5,
        name: "Celular",
        active: true,
        category_id: "1",
      },
      {
        id: 6,
        name: "Computador desktop",
        active: true,
        category_id: "1",
      },

      {
        id: 7,
        name: "Aluguel de maquinário",
        active: true,
        category_id: "2",
      },

      {
        id: 8,
        name: "Antenista",
        active: true,
        category_id: "2",
      },

      {
        id: 9,
        name: "Arquiteto",
        active: true,
        category_id: "2",
      },
    ]);
  }
}

module.exports = SubCategorySeeder;

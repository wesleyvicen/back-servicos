"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.get("lists", "CategoryController.index");
  Route.get("list/:id", "CategoryController.show");
  Route.post("add", "CategoryController.store");
  Route.delete("delete/:id", "CategoryController.destroy");
  Route.put("update/:id", "CategoryController.update");
}).prefix("category");

Route.group(() => {
  Route.get("lists/:id", "SubCategoryController.index");
  Route.get(":id/list/:idx", "SubCategoryController.show");
  Route.post("add/:id", "SubCategoryController.store");
  Route.delete(":idx/delete/:id", "SubCategoryController.destroy");
  Route.put("update/:id", "SubCategoryController.update");
}).prefix("subcategory");

Route.group(() => {
  Route.get("lists/:id", "ProfessionalsController.index");
  Route.get("list/:id", "ProfessionalsController.show");
  Route.post("add", "ProfessionalsController.store");
  Route.delete("delete/:id", "ProfessionalsController.destroy");
  Route.put("update/:id", "ProfessionalsController.update");
}).prefix("profession");

Route.group(() => {
  Route.post("add", "UserController.storeContact");
}).prefix("contact");

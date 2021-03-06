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
  Route.get("lists", "ProfessionController.index");
  Route.get("list/:id", "ProfessionController.show");
  Route.post("add", "ProfessionController.store");
  Route.delete("delete/:id", "ProfessionController.destroy");
  Route.put("update/:id", "ProfessionController.update");
}).prefix("profession");

Route.group(() => {
  Route.get("lists/:id", "UserController.index");
  Route.get(":id/list/:idx", "UserController.show");
  Route.post("add/:id", "UserController.store");
  Route.delete(":idx/delete/:id", "UserController.destroy");
  Route.put("update/:id", "UserController.update");
}).prefix("user");

Route.group(() => {
  Route.post("add", "UserController.storeContact");
}).prefix("contact");

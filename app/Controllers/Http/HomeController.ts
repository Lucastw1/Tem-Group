import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class HomeController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render("Home");
  }

  public store({ request }) {
    return request.input("someKey");
  }

  public search({ request, inertia }) {
    console.log("Received params for filter data:", request.params);

    return inertia.render("Dashboard", { someData: "aguante Silicon Valley" });
  }
}

// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public index({ inertia }) {
    return inertia.render("Users");
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index({ inertia, request }: HttpContextContract) {
    
        return inertia.render('Home');
      }
}

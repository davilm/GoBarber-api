import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const user_id = request.user.id;

        const { provider_id, date } = request.body;

        const parsedDate = parseISO(date);

        const providers = container.resolve(ListProvidersService);

        const appointment = await providers.execute({ date: parsedDate, user_id })
        return response.json(appointment);

    }
}

import { Request, Response } from 'express';

import CreateSpecificationUseCase from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    // instancia UseCase e passa repositorio como dependencia dele
    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export default CreateSpecificationController;

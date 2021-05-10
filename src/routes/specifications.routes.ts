import { Router } from 'express';

import createSpecificationController from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

// instancia repository

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export default specificationsRoutes;

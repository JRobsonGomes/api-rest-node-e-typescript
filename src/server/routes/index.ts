import { Router } from 'express';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  res.send('Hello, World!');
});

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.get(
  '/cidades/:id',
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.put(
  '/cidades/:id',
  CidadesController.updateByIdValidation,
  CidadesController.updateById
);

router.delete(
  '/cidades/:id',
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById
);

router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create
);

export { router };

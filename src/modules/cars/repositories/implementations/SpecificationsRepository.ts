import { getRepository, Repository } from 'typeorm';

import Specification from '../../entities/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private ormRepository: Repository<Specification>;

  constructor() {
    this.ormRepository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.ormRepository.create({ description, name });

    await this.ormRepository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.ormRepository.findOne({ name });

    return specification;
  }
}
export default SpecificationsRepository;

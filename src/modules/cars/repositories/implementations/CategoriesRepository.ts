import { getRepository, Repository } from 'typeorm';

import Category from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.ormRepository.create({
      description,
      name,
    });

    await this.ormRepository.save(category);
  }

  async list(): Promise<Category[]> {
    const category = await this.ormRepository.find();
    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.ormRepository.findOne({ name });
    return category;
  }
}
export default CategoriesRepository;

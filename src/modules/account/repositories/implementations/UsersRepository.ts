import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../entities/User';
import IUsersRepository from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const existsEmailEqual = await this.ormRepository.findOne(email);

    return existsEmailEqual;
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.ormRepository.create({
      name,
      email,
      driver_license,
      password,
    });
    await this.ormRepository.save(user);
  }
}

export default UsersRepository;

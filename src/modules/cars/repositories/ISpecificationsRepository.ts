import Specification from '../entities/Specification';

export interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  create({ name, description }: ICreateSpecificationsDTO): Promise<void>;
  // list(): Specification[];
}

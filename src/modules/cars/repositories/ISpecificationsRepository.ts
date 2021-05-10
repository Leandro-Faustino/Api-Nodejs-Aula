import Specification from '../model/Specification';

export interface ICreateSpecificationsDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationsDTO): void;
  // list(): Specification[];
}

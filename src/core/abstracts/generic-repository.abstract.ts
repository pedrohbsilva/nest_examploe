import { FilterQuery, Model } from 'mongoose';

export abstract class IGenericRepository<T> {
  abstract findOne(filterQuery: FilterQuery<Model<T>>): Promise<Model<T>>;

  abstract find(filterQuery: FilterQuery<Model<T>>): Promise<T[]>;

  abstract create(item: T): Promise<T>;

  abstract findOneAndUpdate(
    filterQuery: FilterQuery<Model<T>>,
    model: Partial<Model<T>>,
  ): Promise<Model<T>>;

  abstract getAll(): Promise<T[]>;
}

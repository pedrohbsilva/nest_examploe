import { FilterQuery, Model } from 'mongoose';
import { IGenericRepository } from '../../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async findOne(filterQuery: FilterQuery<Model<T>>): Promise<Model<T>> {
    return this._repository.findOne(filterQuery);
  }

  async find(filterQuery: FilterQuery<Model<T>>): Promise<T[]> {
    return this._repository.find(filterQuery);
  }

  async getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  async create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<Model<T>>,
    model: Partial<Model<T>>,
  ): Promise<Model<T>> {
    return this._repository.findOneAndUpdate(filterQuery, model);
  }
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { User } from './schemas';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<User>,
  ) {}

  onApplicationBootstrap(): void {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}

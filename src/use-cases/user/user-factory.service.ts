import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities';
import { CreateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto): User {
    const user = new User();
    user.userId = createUserDto.userId;
    user.email = createUserDto.email;
    user.age = createUserDto.age;

    return user;
  }
}

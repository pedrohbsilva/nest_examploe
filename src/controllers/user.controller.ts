import { Controller, Get } from '@nestjs/common';
import { User } from 'src/core';
import { UserUseCases } from 'src/use-cases/user/user.use-case';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userUseCases.getAllUser();
  }
}

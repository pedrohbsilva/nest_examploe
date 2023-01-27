import { IsString, IsNotEmpty } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  age: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

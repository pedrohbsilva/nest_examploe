import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { callbackResponseMessage } from 'src/utils/message';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ name: 'name', example: 'Pedro' })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ name: 'password', example: '12345678' })
  public password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: callbackResponseMessage('1000') })
  @ApiProperty({ name: 'email', example: 'pedro@gmail.com' })
  public email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ name: 'city_id', example: 1 })
  public city_id: number;
}

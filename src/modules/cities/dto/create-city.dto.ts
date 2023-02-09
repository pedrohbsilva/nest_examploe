import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Florianópolis', name: 'name' })
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 1, name: 'state_id' })
  public state_id: number;
}

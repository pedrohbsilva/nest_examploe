import { ApiProperty } from '@nestjs/swagger';
export class StatusBaseDto {
  @ApiProperty({
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    example: '',
  })
  message: string;
}

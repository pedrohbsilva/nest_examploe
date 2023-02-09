import { Controller, Post, Body, Param, Get, HttpCode } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountryService } from './services/country.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CountryEntity } from './entities/country.entity';

@ApiTags('countries')
@Controller('country')
export class CountryController {
  constructor(private countryService: CountryService) {}
  @ApiOperation({
    summary: 'country/:id',
    description:
      'Este endpoint recebe como param o id e retorna os dados do país.',
  })
  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id') id: number): Promise<CountryEntity> {
    return await this.countryService.findById(id);
  }

  @ApiOperation({
    summary: 'country/create',
    description:
      'Este endpoint recebe como body o name e language para salvar um registro de dados.',
  })
  @Post('create')
  @HttpCode(201)
  async createCountry(@Body() newCountry: CreateCountryDto): Promise<string> {
    try {
      this.countryService.createCountry(newCountry);
      return 'país salvo com sucesso';
    } catch (error) {
      console.log(error);
    }
  }
}

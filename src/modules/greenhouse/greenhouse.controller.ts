import { Controller, Get, Post, Body } from '@nestjs/common'
import { GreenhouseService } from './greenhouse-service'
import { CreatePlantDto } from './dto/create-plant.dto'
import { CreateGreenhouseDto } from './dto/create-greenhouse.dto'

@Controller('plant')
export class GreenhouseController {
  constructor(private readonly greenhouseService: GreenhouseService) {}

  @Post()
  createGreenHouse(@Body() createPlantDto: CreatePlantDto) {
    return this.greenhouseService.setupPlant(createPlantDto)
  }

  @Post()
  setupPlant(@Body() createPlantDto: CreatePlantDto) {
    return this.greenhouseService.setupPlant(createPlantDto)
  }

  @Post()
  setupGreenHouse(@Body() createGreenHouse: CreateGreenhouseDto) {
    return this.greenhouseService.setupPlant(createGreenHouse)
  }

  @Get()
  findAll() {
    return this.greenhouseService.findAll()
  }
}

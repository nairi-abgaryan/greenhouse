import { Injectable } from '@nestjs/common'
import { CreatePlantDto } from './dto/create-plant.dto'
import { PlantEntity } from './entities/plant.entity'
import { GreenhouseRepository } from './repository/greenhouse.repository'
import { PlantRepository } from './repository/plant.repository'
import { CreateGreenhouseDto } from './dto/create-greenhouse.dto'
import { GreenhouseEntity } from './entities/greenhouse.entity'

@Injectable()
export class GreenhouseService {
  constructor(
    private greenhouseRepository: GreenhouseRepository,
    private plantRepository: PlantRepository,
  ) {}

  async setupGreenhouse(
    createGreenhouseDto: CreateGreenhouseDto,
  ): Promise<GreenhouseEntity> {
    return this.greenhouseRepository.create(createGreenhouseDto)
  }

  async setupPlant(createPlantDto: CreatePlantDto): Promise<PlantEntity> {
    return this.plantRepository.create(createPlantDto)
  }

  async findAll(): Promise<[PlantEntity[], number]> {
    return this.plantRepository.findAndCount()
  }
}

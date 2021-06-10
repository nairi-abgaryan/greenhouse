import { Injectable } from '@nestjs/common'
import { CreatePlantDto } from './dto/create-plant.dto'
import { PlantEntity } from './entities/plant.entity'
import { GreenhouseRepository } from './repository/greenhouse.repository'
import { PlantRepository } from './repository/plant.repository'
import { GreenhouseDto } from './dto/greenhouse.dto'
import { GreenhouseEntity } from './entities/greenhouse.entity'
import { AuthService } from '../auth/auth.service'
import { EquipmentRepository } from '../equipment/equipment.repository'
import { EquipmentEntity } from '../equipment/entities/equipment.entity'
import { DataRepository } from '../data/data.repository'
import { MoreThan } from 'typeorm'

@Injectable()
export class GreenhouseService {
  constructor(
    private greenhouseRepository: GreenhouseRepository,
    private plantRepository: PlantRepository,
    private equipmentRepository: EquipmentRepository,
    private dataRepository: DataRepository,
  ) {}

  async setupPlant(createPlantDto: CreatePlantDto): Promise<PlantEntity> {
    return this.plantRepository.create(createPlantDto)
  }

  async setupGreenHouse(
    createGreenHouse: GreenhouseDto,
  ): Promise<GreenhouseEntity> {
    const greenHouse: GreenhouseEntity = {
      ...createGreenHouse,
      owner: AuthService.getAuthUser(),
      id: Math.floor(Math.random() * 100000000),
    }

    return this.greenhouseRepository.create(greenHouse)
  }

  async findAll(): Promise<[PlantEntity[], number]> {
    return this.plantRepository.findAndCount()
  }

  async getEquipments(greenHouseUuid: string): Promise<EquipmentEntity[]> {
    const greenhouse = await this.greenhouseRepository.findOne({
      uuid: greenHouseUuid,
    })

    if (greenhouse === null) {
      throw new Error('GreenHouse is not found')
    }

    if (greenhouse.owner.uuid !== AuthService.getAuthUser().uuid) {
      throw new Error('Access denied')
    }

    const equipments = await this.equipmentRepository.find({
      uuid: greenHouseUuid,
    })
    const equipmentsUUID = equipments.map((e) => e.uuid)
    const data = await this.dataRepository.findByIds(equipmentsUUID, {
      createdAt: MoreThan(new Date(new Date().getHours() - 1)),
    })

    return equipments.map((equipment) => {
      return {
        ...equipment,
        datum: data.find((data) => data.equipment_uuid == equipment.name),
      }
    })
  }
}

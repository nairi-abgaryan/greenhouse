import { Injectable } from '@nestjs/common'
import { CreateDatumDto } from './dto/create-datum.dto'
import { DataRepository } from './data.repository'
import { Datum } from './entities/datum.entity'
import { UserEntity } from '../user/user.entity'
import { GreenhouseRepository } from '../greenhouse/repository/greenhouse.repository'
import { MoreThan } from 'typeorm'

@Injectable()
export class DataService {
  constructor(
    private dataRepository: DataRepository,
    private greenHouseRepository: GreenhouseRepository,
  ) {}

  async create(createDatumDto: CreateDatumDto): Promise<Datum> {
    return this.dataRepository.create(createDatumDto)
  }

  async findAll(): Promise<[Datum[], number]> {
    return this.dataRepository.findAndCount()
  }

  async getSpecifiedData(
    user: UserEntity,
    greenhouse_uuid: string,
    equipment_uuid: string,
  ): Promise<Datum[]> {
    const greenHouse = await this.greenHouseRepository.findOne(greenhouse_uuid)
    if (greenHouse === null) {
      throw new Error('Not found Error')
    }

    if (greenHouse.owner.uuid !== user.uuid) {
      throw new Error('Forbidden Error')
    }

    return this.dataRepository.find({
      equipment_uuid,
      greenhouse_uuid,
      createdAt: MoreThan(new Date(new Date().getHours() - 5)),
    })
  }
}

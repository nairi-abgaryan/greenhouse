import { Injectable } from '@nestjs/common'
import { CreateDatumDto } from './dto/create-datum.dto'
import { DataRepository } from './data.repository'
import { Datum } from './entities/datum.entity'

@Injectable()
export class DataService {
  constructor(private dataRepository: DataRepository) {}
  async create(createDatumDto: CreateDatumDto): Promise<Datum> {
    return this.dataRepository.create(createDatumDto)
  }

  async findAll(): Promise<[Datum[], number]> {
    return this.dataRepository.findAndCount()
  }
}

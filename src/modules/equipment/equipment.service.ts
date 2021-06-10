import { Injectable } from '@nestjs/common'
import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { EquipmentRepository } from './equipment.repository'
import { EquipmentEntity } from './entities/equipment.entity'

@Injectable()
export class EquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async addEquipment(
    createEquipmentDto: CreateEquipmentDto,
  ): Promise<EquipmentEntity> {
    return this.equipmentRepository.create(createEquipmentDto)
  }
}

import { Injectable } from '@nestjs/common'
import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { EquipmentRepository } from './equipment.repository'
import { Equipment } from './entities/equipment'

@Injectable()
export class EquipmentService {
  constructor(private equipmentRepository: EquipmentRepository) {}

  async addEquipment(
    createEquipmentDto: CreateEquipmentDto,
  ): Promise<Equipment> {
    return this.equipmentRepository.create(createEquipmentDto)
  }
}

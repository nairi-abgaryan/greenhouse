import { Controller, Post, Body } from '@nestjs/common'
import { EquipmentService } from './equipment.service'
import { CreateEquipmentDto } from './dto/create-equipment.dto'

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() createPlantDto: CreateEquipmentDto) {
    return this.equipmentService.addEquipment(createPlantDto)
  }
}

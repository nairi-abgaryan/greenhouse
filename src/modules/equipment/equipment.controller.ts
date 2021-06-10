import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common'
import { EquipmentService } from './equipment.service'
import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { ApiOkResponse } from '@nestjs/swagger'
import { LoginResponse } from '../auth/models/LoginResponse'
import { LoginRequest } from '../auth/models/LoginRequest'

@Controller('equipments')
export class NotificationController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() createPlantDto: CreateEquipmentDto) {
    return this.equipmentService.addEquipment(createPlantDto)
  }
}

import { Module } from '@nestjs/common'
import { EquipmentService } from './equipment.service'
import { EquipmentRepository } from './equipment.repository'
import { EquipmentController } from './equipment.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentRepository])],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}

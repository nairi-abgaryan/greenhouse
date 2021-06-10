import { Module } from '@nestjs/common'
import { EquipmentService } from './equipment.service'
import { EquipmentRepository } from './equipment.repository'
import { NotificationController } from './equipment.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentRepository])],
  exports: [EquipmentService],
  controllers: [NotificationController],
  providers: [EquipmentService],
})
export class EquipmentModule {}

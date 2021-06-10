import { Module } from '@nestjs/common'
import { NotificationService } from './notification.service'
import { NotificationRepository } from './notificationRepository'
import { NotificationController } from './notification.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([NotificationRepository])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}

import { Injectable } from '@nestjs/common'
import { NotificationRepository } from './notificationRepository'
import { NotificationEntity } from './entities/notification.entity'

@Injectable()
export class NotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async getNotifications(): Promise<NotificationEntity[]> {
    return this.notificationRepository.find()
  }
}

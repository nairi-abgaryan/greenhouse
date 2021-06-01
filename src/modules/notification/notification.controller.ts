import { Controller, Post } from '@nestjs/common'
import { NotificationService } from './notification.service'

@Controller('notifications')
export class NotificationController {
  constructor(private readonly equipmentService: NotificationService) {}

  @Post()
  create() {
    return this.equipmentService.getNotifications()
  }
}

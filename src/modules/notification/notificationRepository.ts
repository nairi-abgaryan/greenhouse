import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { NotificationEntity } from './entities/notification.entity'

@EntityRepository(NotificationEntity)
export class NotificationRepository extends Repository<NotificationEntity> {}

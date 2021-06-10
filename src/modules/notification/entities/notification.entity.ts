import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AbstractEntity } from '../../../models/abstract.entity'

@Entity({ name: 'notifications' })
export class NotificationEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  value: string
}

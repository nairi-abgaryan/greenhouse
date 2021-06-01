import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { AbstractEntity } from '../../../models/abstract.entity'

@Entity({ name: 'equipment' })
export class NotificationEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string
}

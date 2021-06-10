import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Status } from '../interfaces'
import { Datum } from '../../data/entities/datum.entity'

@Entity({ name: 'equipments' })
export class EquipmentEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: Status,
  })
  status: string

  datum: Datum
}

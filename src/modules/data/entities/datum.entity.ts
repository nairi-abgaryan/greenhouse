import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlantEntity } from '../../greenhouse/entities/plant.entity'
import { SensorTypes } from '../../greenhouse/interfaces'
import { AbstractEntity } from '../../../models/abstract.entity'

@Entity({ name: 'datum' })
export class Datum extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  value: number

  @Column()
  greenhouse_uuid: string

  @Column()
  equipment_uuid: string

  @Column({
    type: 'enum',
    enum: SensorTypes,
  })
  sensorTypes: SensorTypes
}

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

  @ManyToOne(() => PlantEntity, (p) => p.datum)
  plant: PlantEntity

  @Column({
    type: 'enum',
    enum: SensorTypes,
  })
  IndicatorDataTypes: SensorTypes
}

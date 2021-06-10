import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlantEntity } from './plant.entity'
import { SensorTypes } from '../interfaces'

@Entity({ name: 'env-conditions' })
export class EnvConditionEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  min: number

  @Column()
  max: number

  @Column({
    type: 'enum',
    enum: SensorTypes,
  })
  type: SensorTypes

  @ManyToOne(() => PlantEntity, (plant) => plant.envConditionEntities)
  plant: PlantEntity
}

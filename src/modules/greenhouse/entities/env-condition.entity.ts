import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlantEntity } from './plant.entity'
import { IndicatorDataTypes } from '../interfaces'

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
    enum: IndicatorDataTypes,
  })
  type: IndicatorDataTypes

  @ManyToOne(() => PlantEntity, (plant) => plant.environmentConditions)
  plant: PlantEntity
}

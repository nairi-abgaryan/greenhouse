import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlantEntity } from '../../greenhouse/entities/plant.entity'
import { IndicatorDataTypes } from '../../greenhouse/interfaces'

@Entity({ name: 'datum' })
export class Datum {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  value: number

  @ManyToOne(() => PlantEntity, (p) => p.datum)
  plant: PlantEntity

  @Column({
    type: 'enum',
    enum: IndicatorDataTypes,
  })
  IndicatorDataTypes: IndicatorDataTypes
}

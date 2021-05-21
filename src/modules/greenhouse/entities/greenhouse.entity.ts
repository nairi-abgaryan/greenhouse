import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlantEntity } from './plant.entity'
import { AbstractEntity } from '../../../models/abstract.entity'

@Entity({ name: 'greenhouse' })
export class GreenhouseEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  location: string

  @Column()
  owner: string

  @ManyToOne(() => GreenhouseEntity, '')
  plant: PlantEntity
}

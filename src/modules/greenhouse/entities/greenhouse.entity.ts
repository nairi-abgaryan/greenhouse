import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { PlantEntity } from './plant.entity'
import { AbstractEntity } from '../../../models/abstract.entity'
import { UserEntity } from '../../user/user.entity'
import { Datum } from '../../data/entities/datum.entity'

@Entity({ name: 'greenhouses' })
export class GreenhouseEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  id: number

  @Column()
  name: string

  @Column()
  address: string

  @Column()
  location?: string

  @ManyToOne(() => UserEntity, '', {
    lazy: true,
  })
  owner: UserEntity

  @ManyToOne(() => PlantEntity, '')
  plant: PlantEntity
}

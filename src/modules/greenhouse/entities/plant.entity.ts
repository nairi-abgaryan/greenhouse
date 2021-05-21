import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EnvConditionEntity } from './env-condition.entity'
import { Datum } from '../../data/entities/datum.entity'
import { AbstractEntity } from '../../../models/abstract.entity'

@Entity({ name: 'plants' })
export class PlantEntity extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @OneToMany(() => EnvConditionEntity, (env) => env.plant)
  environmentConditions: EnvConditionEntity[]

  @OneToMany(() => Datum, (data) => data.plant)
  datum: Datum[]
}

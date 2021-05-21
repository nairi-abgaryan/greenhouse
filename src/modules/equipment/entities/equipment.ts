import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Status } from '../interfaces'

@Entity({ name: 'equipments' })
export class Equipment {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: Status,
  })
  status: string
}

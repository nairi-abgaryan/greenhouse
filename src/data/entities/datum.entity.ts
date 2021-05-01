import { Column, PrimaryGeneratedColumn } from 'typeorm'
import { IndicatorDataTypes } from '../interfaces'

export class Datum {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  type: IndicatorDataTypes
}

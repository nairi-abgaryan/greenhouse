import { PlantEntity } from '../entities/plant.entity'
import { IsNotEmpty, IsString } from 'class-validator'
import { AbstractEntity } from '../../../models/abstract.entity'

export class GreenhouseDto extends AbstractEntity {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  address: string

  @IsString()
  location?: string

  plant: PlantEntity
}

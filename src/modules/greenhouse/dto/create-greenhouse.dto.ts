import { PlantEntity } from '../entities/plant.entity'
import { IsNotEmpty } from 'class-validator'

export class CreateGreenhouseDto {
  uuid: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  address: string

  location: string

  plant: PlantEntity
}

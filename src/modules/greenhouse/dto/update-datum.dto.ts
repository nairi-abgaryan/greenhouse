import { PartialType } from '@nestjs/swagger'
import { CreatePlantDto } from './create-plant.dto'

export class UpdateDatumDto extends PartialType(CreatePlantDto) {}

import { Status } from '../interfaces'

export class CreateEquipmentDto {
  uuid: string
  name: string
  status: Status
}

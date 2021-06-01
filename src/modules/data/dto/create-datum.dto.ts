import { SensorTypes } from '../../greenhouse/interfaces'

export class CreateDatumDto {
  uuid: string
  type: SensorTypes.Temperature
}

import { IndicatorDataTypes } from '../interfaces'

export class CreateDatumDto {
  uuid: string
  type: IndicatorDataTypes.Temperature
}

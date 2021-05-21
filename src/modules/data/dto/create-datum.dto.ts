import { IndicatorDataTypes } from '../../greenhouse/interfaces'

export class CreateDatumDto {
  uuid: string
  type: IndicatorDataTypes.Temperature
}

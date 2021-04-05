import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { IndicatorData } from './indicator.data.entity';

@EntityRepository(IndicatorData)
export class IndicatorDataRepository extends Repository<IndicatorData> {}

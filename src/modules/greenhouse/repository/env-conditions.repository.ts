import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { EnvConditionEntity } from '../entities/env-condition.entity'

@EntityRepository(EnvConditionEntity)
export class EnvConditionsRepository extends Repository<EnvConditionEntity> {}

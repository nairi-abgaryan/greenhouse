import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { GreenhouseEntity } from '../entities/greenhouse.entity'

@EntityRepository(GreenhouseEntity)
export class GreenhouseRepository extends Repository<GreenhouseEntity> {}

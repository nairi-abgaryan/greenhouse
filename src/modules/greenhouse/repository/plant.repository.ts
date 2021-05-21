import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { PlantEntity } from '../entities/plant.entity'

@EntityRepository(PlantEntity)
export class PlantRepository extends Repository<PlantEntity> {}

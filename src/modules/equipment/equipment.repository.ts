import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { Equipment } from './entities/equipment'

@EntityRepository(Equipment)
export class EquipmentRepository extends Repository<Equipment> {}

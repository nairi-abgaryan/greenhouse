import { Repository } from 'typeorm'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'
import { EquipmentEntity } from './entities/equipment.entity'

@EntityRepository(EquipmentEntity)
export class EquipmentRepository extends Repository<EquipmentEntity> {}

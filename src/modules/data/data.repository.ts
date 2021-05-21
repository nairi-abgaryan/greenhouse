import { Repository } from 'typeorm'
import { Datum } from './entities/datum.entity'
import { EntityRepository } from 'typeorm/decorator/EntityRepository'

@EntityRepository(Datum)
export class DataRepository extends Repository<Datum> {}

import { EntityRepository, Repository } from 'typeorm'
import { Datum } from './entities/datum.entity'

@EntityRepository(Datum)
export class DataRepository extends Repository<Datum> {}

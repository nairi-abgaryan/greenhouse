import { Module } from '@nestjs/common'
import { DataService } from './data.service'
import { DataRepository } from './data.repository'
import { DataController } from './data.controller'

@Module({
  controllers: [DataController],
  providers: [DataService, DataRepository],
})
export class DataModule {}

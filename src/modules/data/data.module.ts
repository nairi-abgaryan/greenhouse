import { Module } from '@nestjs/common'
import { DataService } from './data.service'
import { DataRepository } from './data.repository'
import { DataController } from './data.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([DataRepository])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}

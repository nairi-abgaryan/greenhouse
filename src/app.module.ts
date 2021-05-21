import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataModule } from './modules/data/data.module'
import { GreenhouseModule } from './modules/greenhouse/greenhouse.module'
import { EquipmentModule } from './modules/equipment/equipment.module'
import { getDbConfig } from './config/db.config'
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot(getDbConfig()),
    DataModule,
    GreenhouseModule,
    EquipmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

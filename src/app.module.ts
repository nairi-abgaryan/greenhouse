import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getDbConfig } from './config/db.config'
import { DataModule } from './data/data.module'

@Module({
  imports: [TypeOrmModule.forRoot(getDbConfig()), DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IndicatorDataController } from './indicator-data.controller';
import { IndicatorDataService } from './indicator-data.service';
import {IndicatorData} from './indicator.data.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([IndicatorData]),
  ],
  controllers: [IndicatorDataController],
  exports: [TypeOrmModule],
  providers: [IndicatorDataService],
})
export class IndicatorDataModule {}

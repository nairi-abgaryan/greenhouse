import { Module } from '@nestjs/common'
import { GreenhouseService } from './greenhouse-service'
import { GreenhouseController } from './greenhouse.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GreenhouseRepository } from './repository/greenhouse.repository'
import { PlantRepository } from './repository/plant.repository'
import { EnvConditionsRepository } from './repository/env-conditions.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GreenhouseRepository,
      PlantRepository,
      EnvConditionsRepository,
    ]),
  ],
  controllers: [GreenhouseController],
  providers: [GreenhouseService],
})
export class GreenhouseModule {}

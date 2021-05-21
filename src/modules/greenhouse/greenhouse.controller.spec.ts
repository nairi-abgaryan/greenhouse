import { Test, TestingModule } from '@nestjs/testing'
import { GreenhouseController } from './greenhouse.controller'
import { GreenhouseService } from './greenhouse-service'

describe('PlantController', () => {
  let controller: GreenhouseController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GreenhouseController],
      providers: [GreenhouseService],
    }).compile()

    controller = module.get<GreenhouseController>(GreenhouseController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

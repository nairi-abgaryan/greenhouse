import { Test, TestingModule } from '@nestjs/testing'
import { NotificationController } from './equipment.controller'
import { EquipmentService } from './equipment.service'

describe('EquipmentController', () => {
  let controller: NotificationController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [EquipmentService],
    }).compile()

    controller = module.get<NotificationController>(NotificationController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

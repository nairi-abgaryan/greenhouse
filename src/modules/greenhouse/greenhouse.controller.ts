import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { GreenhouseService } from './greenhouse-service'
import { CreatePlantDto } from './dto/create-plant.dto'
import { GreenhouseDto } from './dto/greenhouse.dto'
import { ApiOkResponse } from '@nestjs/swagger'
import { LoginResponse } from '../auth/models/LoginResponse'
import { GreenhouseEntity } from './entities/greenhouse.entity'
import { EquipmentEntity } from '../equipment/entities/equipment.entity'
import { AuthGuard } from '../../guards/auth.guard'
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service'
import { AuthUser } from '../../decorators/auth-user.decorator'
import { UserEntity } from '../user/user.entity'
import { DataService } from '../data/data.service'
import { Datum } from '../data/entities/datum.entity'

@Controller('greenhouses')
export class GreenhouseController {
  constructor(
    private readonly greenhouseService: GreenhouseService,
    private readonly dataService: DataService,
  ) {}

  @Post()
  createGreenHouse(@Body() createPlantDto: CreatePlantDto) {
    return this.greenhouseService.setupPlant(createPlantDto)
  }

  @Post()
  setupPlant(@Body() createPlantDto: CreatePlantDto) {
    return this.greenhouseService.setupPlant(createPlantDto)
  }

  @Post()
  @ApiOkResponse({
    type: GreenhouseEntity,
    description: 'Setup greenhouse endpoint',
  })
  async setupGreenHouse(
    @Body() greenHouseDto: GreenhouseDto,
  ): Promise<GreenhouseEntity> {
    return this.greenhouseService.setupGreenHouse(greenHouseDto)
  }

  @Post(':uuid/equipments')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: LoginResponse,
    description: 'Get greenhouse equipments',
  })
  async getEquipments(@Param() uuid: string): Promise<EquipmentEntity[]> {
    return await this.greenhouseService.getEquipments(uuid)
  }

  @Get()
  findAll() {
    return this.greenhouseService.findAll()
  }

  @Get('/:uuid/equipments/:equipment_uuid/data')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @UseInterceptors(AuthUserInterceptor)
  async getData(
    @AuthUser() user: UserEntity,
    @Param() uuid: string,
    @Param() equipment_uuid: string,
  ): Promise<Datum[]> {
    return this.dataService.getSpecifiedData(user, uuid, equipment_uuid)
  }
}

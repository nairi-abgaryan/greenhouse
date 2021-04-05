import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { IndicatorData } from './indicator.data.entity';
import { IndicatorDataService } from './indicator-data.service';
import {UUIDParam} from '../../common/decorators/uuid-param';
import {Multi} from '../../common/pagination/multi';
import {Pagination} from '../../common/pagination/pagination';

@Controller('users')
@ApiTags('users')
export class IndicatorDataController {
  constructor(
    private indicatorsService: IndicatorDataService,
  ) {}

  @Get('admin')
  @HttpCode(HttpStatus.OK)
  async admin(indicatorData: IndicatorData): Promise<void> {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: IndicatorData,
  })
  getUsers(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: Pagination,
  ): Promise<Multi<IndicatorData>> {
    return this.indicatorsService.getIndicatorsData();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: IndicatorData,
  })
  getUser(@UUIDParam('id') userId: string): Promise<IndicatorData> {
    return this.indicatorsService.getIndicatorData(userId);
  }
}

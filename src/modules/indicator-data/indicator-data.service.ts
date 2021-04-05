import { Injectable } from '@nestjs/common';
import {FindConditions, SelectQueryBuilder} from 'typeorm'

import { IndicatorData } from './indicator.data.entity';
import { IndicatorDataRepository } from './indicator-data.repository';
import {Multi} from '../../common/pagination/multi';

@Injectable()
export class IndicatorDataService {
  constructor(
    public readonly userRepository: IndicatorDataRepository,
  ) {}

  /**
   * Find single indicator-data
   */
  findOne(findData: FindConditions<IndicatorData>): Promise<IndicatorData> {
    return this.userRepository.findOne(findData);
  }

  async saveIndicatorData(): Promise<IndicatorData> {
    return new IndicatorData()
  }

  async getIndicatorsData(
  ): Promise<Multi<IndicatorData>> {
      return
  }

  async getIndicatorData(uuid: string) {
    const queryBuilder = this.userRepository.createQueryBuilder('user');

    queryBuilder.where('indicator-data.id = :userId', { uuid });

    const userEntity = await queryBuilder.getOne();

    return userEntity
  }
}

import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../models/abstract.entity';

@Entity({ name: 'indicators-data' })
export class IndicatorData extends AbstractEntity {
  @Column({ nullable: true })
  type: string;
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicatorDataModule } from './modules/indicator-data/indicator-data.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'secret',
    database: 'greenhouse',
    synchronize: true,
    autoLoadEntities: true
  }),
  IndicatorDataModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

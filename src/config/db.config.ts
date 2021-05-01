import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export function getDbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'greenhouse',
    synchronize: true,
    autoLoadEntities: true,
  }
}

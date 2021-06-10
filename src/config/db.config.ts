import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export function getDbConfig(): TypeOrmModuleOptions {
  const entities = [`${__dirname}/../../modules/**/*.entity{.ts,.js}`]
  const migrations = [`${__dirname}/../../migrations/*{.ts,.js}`]

  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: false,
    autoLoadEntities: false,
    entities,
    migrations,
    migrationsRun: true,
    cli: {
      migrationsDir: 'migration',
    },
  }
}

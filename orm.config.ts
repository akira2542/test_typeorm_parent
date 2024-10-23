import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import * as process from 'node:process';

import configuration from '@/configs/configuration';
import { getEnvPath } from '@/configs';

const envFilePath: string = getEnvPath(`${process.cwd()}/envs`);

const result = dotenv.config({
  path: envFilePath,
});

if (result.error) {
  throw result.error;
}

// console.log(result.parsed);

const databaseConfig = configuration().database;
// console.log(databaseConfig);
export const ormConfig = {
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  synchronize: false,
};

const options = {
  ...ormConfig,
  autoLoadEntities: true,
  synchronize: true,
  // logging: true,
  // dropSchema: true,
  migrations: ['src/**/*/migrations/*{.ts,.js}'],
  entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
  subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
  seeds: ['src/**/*/seeds/*{.ts,.js}'],
  factories: ['src/**/*/factories/*{.ts,.js}'],
} as DataSourceOptions & SeederOptions;

export let dataSource: DataSource;
(async () => {
  dataSource = new DataSource(options);
  try {
    await dataSource.initialize();
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
  }
  await runSeeders(dataSource);
})();

// dataSource
//   .initialize()
//   .then(async (dataSource: DataSource) => {
//     console.log(
//       `[${configuration().nest.env}] - Data Source has been initialized!`,
//     );
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization:', err);
//   });

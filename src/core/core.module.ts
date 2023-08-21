import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostgresModule } from './postgres/postgres.module';

import configuration from '../../configuration/configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    PostgresModule,
  ],
  exports: [PostgresModule],
})
export class CoreModule {}

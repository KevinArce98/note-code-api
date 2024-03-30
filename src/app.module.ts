import { Module } from '@nestjs/common';
import { initEnvVariables, initTypeOrmModule } from './config';
import { CodeModule } from './code/code.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [initEnvVariables, initTypeOrmModule, CodeModule, HealthModule],
})
export class AppModule {}

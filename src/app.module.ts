import { Module } from '@nestjs/common';
import { initEnvVariables, initTypeOrmModule } from './config';
import { CodeModule } from './code/code.module';

@Module({
  imports: [initEnvVariables, initTypeOrmModule, CodeModule],
})
export class AppModule {}

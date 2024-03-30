import { ConfigModule } from '@nestjs/config';

export const initEnvVariables = ConfigModule.forRoot({
  envFilePath: ['.env.local', '.env'],
});

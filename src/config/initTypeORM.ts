import { TypeOrmModule } from '@nestjs/typeorm';
import { Code } from 'src/entities';

export const initTypeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Code],
  synchronize: Boolean(process.env.DB_SYNC) || false,
});

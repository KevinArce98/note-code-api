import { ThemeEnum } from 'src/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Code {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  code: string;
  @Column('enum', { enum: ThemeEnum, default: 'light' })
  theme: string;
  @Column()
  language: string;
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}

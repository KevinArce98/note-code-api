import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ThemeEnum } from 'src/types';

export class CreateCodeDto {
  @IsString()
  readonly code: string;

  @IsEnum(ThemeEnum)
  @IsOptional()
  readonly theme: ThemeEnum;

  @IsString()
  readonly language: string;
}

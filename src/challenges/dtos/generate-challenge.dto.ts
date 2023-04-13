import { IsEnum } from 'class-validator';
import { Languages } from '../enums/languages';
import { Levels } from '../enums/levels';

export class GenerateChallengeDto {
  @IsEnum(Languages)
  language: Languages;

  @IsEnum(Levels)
  level: Levels;
}

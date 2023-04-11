import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChallengesModule } from './challenges/challenges.module';

@Module({
  imports: [ConfigModule.forRoot(), ChallengesModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChallengesModule } from './challenges/challenges.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), ChallengesModule, HealthModule],
})
export class AppModule {}

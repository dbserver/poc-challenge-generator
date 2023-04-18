import { Module } from '@nestjs/common';
import { ChallengesController } from './controllers/challenges.controller';
import { ChallengesService } from './services/challenges.service';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [ChallengesController],
  providers: [ChallengesService],
  imports: [SharedModule],
})
export class ChallengesModule {}

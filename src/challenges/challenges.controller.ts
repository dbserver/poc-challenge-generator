import { Controller, Post, Body } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { GenerateChallengeDto } from './generate-challenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengeService: ChallengesService) {}

  @Post()
  async generateChallenge(
    @Body() generateChallengeDto: GenerateChallengeDto,
  ): Promise<string> {
    return await this.challengeService.generateChallenge(generateChallengeDto);
  }
}

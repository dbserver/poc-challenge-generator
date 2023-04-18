import { Module } from '@nestjs/common';
import { openAIApiProvider } from './providers/open-ai-api.provider';

@Module({
  providers: [openAIApiProvider],
  exports: [openAIApiProvider],
})
export class SharedModule {}

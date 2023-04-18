import { Inject, Injectable } from '@nestjs/common';
import { OpenAIApi } from 'openai';
import { GenerateChallengeDto } from '../dtos/generate-challenge.dto';

@Injectable()
export class ChallengesService {
  constructor(@Inject('OpenAIApi') private readonly openAIApi: OpenAIApi) {}

  async generateChallenge({
    language,
    level,
  }: GenerateChallengeDto): Promise<string> {
    const prompt = `
      Gerar 1 desafio de desenvolvimento na linguagem ${language}.
      O desafio deve conter os atributos necessários com detalhes e
      com os tipos especificados e pedir para que sejam criadas algumas
      funcionalidades ou métodos. A descrição do desafio deve ser bem
      clara e descritiva. Deve ser demonstrado uma amostra de dados de
      entrada para teste e uma amostra de dados de saída esperada.
      O desafio deve ser de nível ${level}. Não enviar a solução
      dos problemas junto com o desafio.
    `;

    const completion = await this.openAIApi.createCompletion({
      prompt,
      model: 'text-davinci-003',
      temperature: 0.8,
      max_tokens: 500,
      top_p: 1,
    });

    return completion.data.choices[0].text;
  }
}

import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { GenerateChallengeDto } from './generate-challenge.dto';

@Injectable()
export class ChallengesService {
  async generateChallenge({
    language,
    level,
  }: GenerateChallengeDto): Promise<string> {
    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

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

    const completion = await openai.createCompletion({
      prompt,
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
    });

    return completion.data.choices[0].text;
  }
}

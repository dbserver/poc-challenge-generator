import { Configuration, OpenAIApi } from 'openai';

export const openAIApiProvider = {
  provide: 'OpenAIApi',
  useFactory: () => {
    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    return new OpenAIApi(configuration);
  },
};

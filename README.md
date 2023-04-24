# Aplicação de Geração de Desafios com OpenAI

Esta prova de conceito (POC) é uma base para futuras implementações de geração de desafios ou geração de novas funcionalidades utilizando a API do OpenAI. Ela é construída em Node.js e utiliza o framework Nest.js para criar uma API que permite a geração de desafios de desenvolvimento em texto para pessoas iniciantes na área de TI.

## Modelo Utilizado

Esta aplicação utiliza o modelo `text-davinci-003` da OpenAI para gerar os desafios de desenvolvimento. Este modelo é treinado em uma grande quantidade de código-fonte e pode gerar texto de alta qualidade em diversos estilos e formatos. Foram testados outros modelos de conclusão de texto na ferramenta <a href="https://gpttools.com/comparisontool">OpenComparison tool</a>, da GPTTools, para comparar o tempo e a qualidade das respostas. 

O corpo da requisição recebe os seguintes parâmetros:

```
{
  prompt,
  model: 'text-davinci-003',
  temperature: 0.8,
  max_tokens: 500,
  top_p: 1,
}
```

- Prompt: é a frase inicial ou o contexto fornecido à API, na qual o modelo irá se basear para gerar a resposta.  O prompt deve ser claro e específico, indicando o tipo de desafio que se deseja criar.

- Model: é usado para especificar qual modelo deve ser utilizado para a tarefa em questão. Na API do OpenAI, existem diversos modelos disponíveis para diferentes tarefas, como processamento de linguagem natural, geração de texto, tradução, entre outros.

- Temperature: é um parâmetro que controla o quão "criativo" o modelo pode ser. Valores mais altos podem resultar em respostas mais criativas, enquanto valores mais baixos tendem a gerar respostas mais seguras e convencionais.

- Max_tokens: define o número máximo de tokens que o modelo irá gerar na resposta. Um token é uma unidade básica de texto, geralmente uma palavra.

- Top_p: é um parâmetro que controla a probabilidade de escolher as palavras mais prováveis para a próxima palavra em vez de selecionar aleatoriamente de todas as palavras possíveis. Valores mais altos tendem a gerar respostas mais seguras e previsíveis, enquanto valores mais baixos tendem a ser mais criativos e surpreendentes.

*Para mais informações sobre os modelos, consulte a documentação em https://platform.openai.com/docs/models/overview

## Obtendo uma Chave de API Gratuita do OpenAI

Para utilizar esta aplicação, você precisa obter uma chave de API gratuita do OpenAI. Siga os passos abaixo:

1. Acesse o site da OpenAI em https://www.openai.com/ e clique em "Get started for free" para criar uma conta gratuita.
2. Complete o processo de cadastro e faça login na sua conta OpenAI.
3. No painel de controle da sua conta, clique em "Create" para criar um novo projeto.
4. Escolha o tipo de projeto "Developer" e clique em "Next".
5. Escolha o plano gratuito "Starter" e clique em "Next".
6. Complete as informações do projeto, como nome e descrição, e clique em "Create Project".
7. No painel do projeto, você encontrará sua chave de API. Copie essa chave, pois você precisará adicioná-la na configuração da aplicação.

## Tokens na versão Gratuita

Segundo a documentação, o modelo `text-davinci-003` possui um limite máximo de 4.097 tokens, porém não é especificado se esses tokens são consumidos por chave de API, por requisição, mês, etc..

Os tokens são contabilizados tanto na entrada (pergunta) quanto na saída (resposta) da API. Cada palavra, pontuação, espaço em branco e caractere especial é considerado um token. Por exemplo, a frase "Olá, tudo bem?" é composta por 5 tokens: ["Olá", ",", "tudo", "bem", "?"]. É importante ter em mente que tokens de controle, como aqueles usados para formatar as instruções, também são contabilizados na cota de tokens.

O prompt de entrada para a geração dos desafios possui 58 tokens, então em uma resposta com 300 tokens, seriam cconsumidos 358 tokens na solicitação.

## Configurando a Aplicação

Para configurar a aplicação, siga os passos abaixo:

1. Clone o repositório para sua máquina local: `git clone git@github.com:dbserver/poc-challenge-generator.git`
2. Navegue para o diretório da aplicação: `cd poc-challenge-generator`
3. Crie um arquivo `.env` na raiz da aplicação e adicione sua chave de API do OpenAI com a seguinte variável: `OPEN_AI_API_KEY=sua-chave-de-api-aqui`

## Scripts Básicos

Aqui estão alguns scripts básicos para executar a aplicação:

## Instalar as dependências

```bash
$ npm install
```

## Executar a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

<!-- ## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->

## Utilizando a Aplicação

Após configurar a aplicação, você pode rodá-la e utilizar a API para gerar desafios de desenvolvimento. Você pode enviar um POST request para a rota `/challenges` com o `language` e `level` desejados no corpo da requisição. Ambos os parâmetros possuem validações baseadas em classes Enum no código, garantindo a correta entrada de dados.

Exemplo de requisição utilizando cURL:

```bash
curl -X POST http://localhost:3000/challenges -H "Content-Type: application/json" -d '{
  "language": "JavaScript",
  "level": "Fácil"
}'
```

Lembre-se de substituir os valores de language e level de acordo com suas necessidades.

## Próximos Passos

- Desenvolver um módulo para correção dos desafios.
- Adicionar testes.
- Salvar desafios em banco de dados.
- Desenvolver um frontend.

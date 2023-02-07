export const environment = {
  production: true,
  baseUrl: 'https://detqa-api.johnpapadatos.tech/detQA/api',
};

export enum Endpoint {
  Questions = 'questions',
  Question = 'question',
  Answers = 'answers',
  Answer = 'answer',
  Categories = 'categories',
  Suggestions = 'suggestions',
}

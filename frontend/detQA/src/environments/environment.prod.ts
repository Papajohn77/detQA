export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080/detQA/api',
};

export enum Endpoint {
  Questions = 'questions',
  Question = 'question',
  Answers = 'answers',
  Answer = 'answer',
  Categories = 'categories',
  Suggestions = 'suggestions',
}

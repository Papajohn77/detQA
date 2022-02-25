// `ng build` replaces `environment.ts` with `environment.prod.ts`.

export const environment = {
  production: false,
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

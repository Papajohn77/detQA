// `ng build` replaces `environment.ts` with `environment.prod.ts`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/detQA/api',
};

export enum Endpoint {
  Questions = 'questions',
  Categories = 'categories',
  Suggestions = 'suggestions',
}

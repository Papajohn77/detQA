// `ng build` replaces `environment.ts` with `environment.prod.ts`.

export const environment = {
  production: false,
  baseUrl: 'http://ism.dmst.aueb.gr/ismgroup18/api/optional',
};

export enum Endpoint {
  Questions = 'questions',
  Categories = 'categories',
  Suggestions = 'suggestions',
}

import { Category } from './Category';

export interface Question {
  id: number;
  title: string;
  body: string;
  date_created: string;
  category: Category;
}

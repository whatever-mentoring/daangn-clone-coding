import { ArticlesData } from '../data/type';
import { baseAxios } from './baseAxios';

export const getArticles = async () => {
  const response = await baseAxios
    .get<{ data: ArticlesData[] }>('/api/articles')
    .then((res) => res.data);
  return response.data;
};

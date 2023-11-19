import { baseAxios } from './baseAxios';

export const getArticles = async () => {
  const response = await baseAxios.get('/api/articles').then((response) => response.data);
  console.log('articles: ', response.data);
  return response;
};

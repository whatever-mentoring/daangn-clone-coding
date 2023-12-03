import { DetailArticleData } from '../data/type';
import { baseAxios } from './baseAxios';

export const getDetailArticle = async (id: number) => {
  const response = await baseAxios
    .get<DetailArticleData>(`/api/article/${id}`)
    .then((res) => res.data);
  return response;
};

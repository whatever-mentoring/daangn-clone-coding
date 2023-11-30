import { http, HttpResponse } from 'msw';
import articles from '../data/articles.json';

export const handlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(articles);
  }),
  http.get(`/api/article/:articleId`, async (req) => {
    const { articleId } = req.params;
    const data = await import(`../data/article/${articleId}.json`);

    return HttpResponse.json(data);
  }),
];

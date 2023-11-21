import { http, HttpResponse } from 'msw';
import articles from '../data/articles.json';
import article1 from '../data/article/1.json';
import article2 from '../data/article/2.json';
import article3 from '../data/article/3.json';
import article4 from '../data/article/4.json';
import article5 from '../data/article/5.json';
import article6 from '../data/article/6.json';

export const handlers = [
  http.get('/api/articles', () => {
    return HttpResponse.json(articles);
  }),
  http.get('/api/article/1', () => {
    return HttpResponse.json(article1);
  }),
  http.get('/api/article/2', () => {
    return HttpResponse.json(article2);
  }),
  http.get('/api/article/3', () => {
    return HttpResponse.json(article3);
  }),
  http.get('/api/article/4', () => {
    return HttpResponse.json(article4);
  }),
  http.get('/api/article/5', () => {
    return HttpResponse.json(article5);
  }),
  http.get('/api/article/6', () => {
    return HttpResponse.json(article6);
  }),
];

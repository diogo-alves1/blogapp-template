import { Routes } from '@angular/router';

import { BlogOverviewPage } from './feature/blog-overview-page/blog-overview-page';
import { BlogCreate } from './feature/blog-create/blog-create';
import { NotFoundPage } from './feature/not-found-page/not-found-page';
import { blogResolver } from './core/blog.resolver';

export const routes: Routes = [
  {
    path: '',
    component: BlogOverviewPage,
  },
  {
    path: 'create',
    component: BlogCreate,
  },
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./feature/blog-detail-page/blog-detail-page').then(
        (m) => m.BlogDetailPage,
      ),
    resolve: {
      blog: blogResolver,
    },
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
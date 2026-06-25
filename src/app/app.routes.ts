import { Routes } from '@angular/router';

import { BlogOverviewPage } from './feature/blog-overview-page/blog-overview-page';
import { BlogDetailPage } from './feature/blog-detail-page/blog-detail-page';

export const routes: Routes = [
  {
    path: '',
    component: BlogOverviewPage,
  },
  {
    path: 'blog/:id',
    component: BlogDetailPage,
  },
];

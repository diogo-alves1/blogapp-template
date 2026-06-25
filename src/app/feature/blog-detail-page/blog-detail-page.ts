import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog } from '../../core/utils/blog-model';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail-page.html',
  styleUrl: './blog-detail-page.scss',
})
export class BlogDetailPage {
  private route = inject(ActivatedRoute);

  blog = this.route.snapshot.data['blog'] as Blog;
}

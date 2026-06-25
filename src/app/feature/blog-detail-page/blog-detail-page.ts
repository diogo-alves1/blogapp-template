import { Component, computed, inject, input } from '@angular/core';

import { BlogService } from '../../shared/blog';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail-page.html',
  styleUrl: './blog-detail-page.scss',
})
export class BlogDetailPage {
  id = input.required<string>();

  private blogService = inject(BlogService);

  blog = computed(() => this.blogService.getById(Number(this.id())));
}

import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Blog } from '../../core/utils/blog-model';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCardComponent {
  model = input.required<Blog>();

  likeClicked = output<number>();

  onLikeClick(): void {
    this.likeClicked.emit(this.model().id);
  }
}

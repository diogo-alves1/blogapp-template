import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardComponent } from './blog-card';
import { Blog } from '../../core/utils/blog-model';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogCardComponent);

    const testBlog: Blog = {
      id: 1,
      title: 'Test Blog',
      contentPreview: 'Test Content',
      author: 'Test Author',
      likes: 0,
      comments: 0,
      likedByMe: false,
      createdByMe: false,
      createdAt: '2026-01-01',
      updatedAt: '2026-01-01',
    };

    fixture.componentRef.setInput('model', testBlog);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BlogDetailPage } from './blog-detail-page';

describe('BlogDetailPage', () => {
  let component: BlogDetailPage;
  let fixture: ComponentFixture<BlogDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogDetailPage);

    fixture.componentRef.setInput('id', '1');

    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

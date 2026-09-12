import { Component, signal } from '@angular/core';
import {
  form,
  required,
  minLength,
  maxLength,
  FormField,
} from '@angular/forms/signals';

@Component({
  selector: 'app-blog-create',
  standalone: true,
  imports: [FormField],
  templateUrl: './blog-create.html',
  styleUrl: './blog-create.scss',
})
export class BlogCreate {
  blogModel = signal({
    title: '',
    content: '',
    category: 'general',
  });

  blogForm = form(this.blogModel, (s) => {
    required(s.title, {
      message: 'Titel ist erforderlich',
    });

    minLength(s.title, 3, {
      message: 'Mindestens 3 Zeichen',
    });

    maxLength(s.title, 100, {
      message: 'Maximal 100 Zeichen',
    });

    required(s.content, {
      message: 'Inhalt ist erforderlich',
    });

    minLength(s.content, 10, {
      message: 'Mindestens 10 Zeichen',
    });

    required(s.category, {
      message: 'Kategorie ist erforderlich',
    });
  });

  onSubmit(event: Event): void {
    event.preventDefault();

    console.log(this.blogModel());
  }
}
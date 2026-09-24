import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from './core/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'HFTM Web Applications (IN353)';

  isDarkMode = localStorage.getItem('theme') === 'dark';

  constructor() {
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-theme', this.isDarkMode);

    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}

import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  route?: string;
  icon?: string;
  children?: NavItem[];
}

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-header.component.html',
  styleUrl: './lib-header.component.scss'
})
export class LibHeaderComponent {
  // Inputs configurables
  filiale = input.required<string>();
  showProfile = input<boolean>(false);
  
  // État du menu mobile
  menuOpen = signal(false);
  activeDropdown = signal<string | null>(null);
  
  // Navigation items
  navItems: NavItem[] = [
    {
      label: 'Composants UI',
      children: [
        { label: 'LibInput', route: '#lib-input', icon: '📝' },
        { label: 'LibButton', route: '#lib-button', icon: '🔘' },
        { label: 'LibCard', route: '#lib-card', icon: '🎴' }
      ]
    },
    {
      label: 'Documentation',
      children: [
        { label: 'Signals API', route: '#signals' },
        { label: 'Material Theme', route: '#theme' },
        { label: 'Architecture Nx', route: '#architecture' }
      ]
    },
    { label: 'Demo Live', route: '#demo' }
  ];
  
  // Langue courante
  currentLang = signal('FR');
  languages = ['FR', 'EN', 'DE'];
  
  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
  
  toggleDropdown(label: string) {
    this.activeDropdown.update(current => 
      current === label ? null : label
    );
  }
  
  isDropdownActive(label: string): boolean {
    return this.activeDropdown() === label;
  }
  
  switchLanguage(lang: string) {
    this.currentLang.set(lang);
    this.activeDropdown.set(null);
  }
}

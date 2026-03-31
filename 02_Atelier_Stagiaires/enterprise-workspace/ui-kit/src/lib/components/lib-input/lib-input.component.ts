import { Component, computed, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './lib-input.component.html',
  styleUrl: './lib-input.component.scss',
})
export class LibInputComponent {
  // Two-way binding avec model()
  value = model('');

  // Inputs configurables avec valeurs par défaut
  label = input<string>('Label par défaut');
  placeholder = input<string>('Saisissez une valeur...');
  maxLength = input<number>(50);

  // Computed: calcul réactif du nombre de caractères restants
  remainingChars = computed(() => this.maxLength() - this.value().length);

  // Computed: détection d'erreur (dépassement limite)
  hasError = computed(() => this.remainingChars() < 0);
}

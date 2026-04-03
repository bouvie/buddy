// AppShell est un composant structurel sans variante.
// Le keyboardVisible est un boolean piloté depuis l'app via @capacitor/keyboard.
//
// Exemple d'intégration Capacitor dans le composant host :
//   import { Keyboard } from '@capacitor/keyboard';
//   import { Capacitor } from '@capacitor/core';
//
//   readonly keyboardVisible = signal(false);
//
//   constructor() {
//     if (Capacitor.isNativePlatform()) {
//       Keyboard.addListener('keyboardWillShow', () => this.keyboardVisible.set(true));
//       Keyboard.addListener('keyboardWillHide', () => this.keyboardVisible.set(false));
//     }
//   }

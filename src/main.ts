import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {routes} from './app/app.routes';
import { provideRouter } from "@angular/router";
import {APP_INITIALIZER, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {TranslationService} from './app/services/translation/translation.service';
import { providePrimeNG } from 'primeng/config';
import  Aura  from '@primeuix/themes/aura';
import {definePreset} from '@primeuix/themes';

const OlivaPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#f4faec',
      100: '#e6f4d0',
      200: '#cce9a1',
      300: '#b3dd72',
      400: '#99d243',
      500: '#86b622',  // your base green
      600: '#729b1d',
      700: '#5e7f18',
      800: '#4a6412',
      900: '#36480d',
      950: '#222d08'
    }
  },
  components: {
    panel: {
      root: {
        borderColor: '#86b622'
      }
    }
  }
});

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: OlivaPreset,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'primeng'
          },
          darkModeSelector: false  // ← ADD THIS to stop dark mode
        }
      }
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: (translations: TranslationService) => () => translations,
      deps: [TranslationService],
      multi: true
    }
  ]
}).catch((err) => console.error(err));

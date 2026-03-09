import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import {routes} from './app/app.routes';
import { provideRouter } from "@angular/router";
import {APP_INITIALIZER, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {TranslationService} from './app/services/translation/translation.service';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (translations: TranslationService) => () => translations,
      deps: [TranslationService],
      multi: true
    }
  ]
}).catch((err) => console.error(err));

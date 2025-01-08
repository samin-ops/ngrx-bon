import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideState, provideStore} from '@ngrx/store'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { counterReducer } from './shared/store/counter.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(),
     provideStore({counter: counterReducer}), // pour que @ngrx/store fonctionne
    //provideState(), // on initialise notre store

    ]
};

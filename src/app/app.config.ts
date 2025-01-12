import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutes} from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import{provideStoreDevtools} from '@ngrx/store-devtools'
import { authFeatureKey, authReducer } from './auth/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(AppRoutes), provideClientHydration(),
     provideStore(),// on branche le store
     provideState(authFeatureKey, authReducer), // il prends les keys de reducer
     provideStoreDevtools({
      maxAge: 25,
      logOnly: isDevMode(),
      autoPause: true,
      trace:false,
      traceLimit:75
    })

    ]

};





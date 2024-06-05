import {ApplicationConfig, EnvironmentProviders, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAnimations} from "@angular/platform-browser/animations";
import {InMemoryDataService} from "@core/services/in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from '@ngrx/effects';
import {appEffects, appStore} from "@core/store/store";
import {EnfantService} from "@core/services/enfant-service.service";
import {ErrorInterceptor} from "@core/services/error.interceptor";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./app.component";


const inMemoryWebApiProviders: EnvironmentProviders = importProvidersFrom([
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
]);
const translateProviders: EnvironmentProviders = importProvidersFrom([
  TranslateModule.forRoot({
    defaultLanguage: 'fr',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
]);
export const appConfig: ApplicationConfig = {
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    provideClientHydration(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    inMemoryWebApiProviders,
    translateProviders,
    provideStore(appStore),
    provideEffects(appEffects),
    EnfantService,
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: false, // Pauses recording actions and state changes when the extension window is not open/**/
      trace: true, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideEffects()
  ]
};

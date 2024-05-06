import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideAnimations} from "@angular/platform-browser/animations";
import {InMemoryDataService} from "@core/services/in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {HttpClientModule} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}))
  ]
};

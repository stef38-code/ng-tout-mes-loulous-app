import {EnvironmentProviders, importProvidersFrom} from "@angular/core";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../app.component";
import {HttpClient} from "@angular/common/http";

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

export {translateProviders};

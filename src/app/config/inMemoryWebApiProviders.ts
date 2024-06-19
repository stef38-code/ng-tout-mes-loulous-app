import {EnvironmentProviders, importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "@core/services/in-memory-data.service";

const inMemoryWebApiProviders: EnvironmentProviders = importProvidersFrom([
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
]);

export {inMemoryWebApiProviders};

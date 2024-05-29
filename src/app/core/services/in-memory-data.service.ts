import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {enfants} from "./in-memory.data";
import {Enfant} from "@model/enfant";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    return {enfants};
  }

  genId(enfants: Enfant[]): number {
    return enfants.length > 0 ? Math.max(...enfants.map(enfant => enfant.id)) + 1 : 11;
  }
}

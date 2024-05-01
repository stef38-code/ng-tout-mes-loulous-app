import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {ENFANTS} from "./in-memory.data";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
    console.log("========================>InMemoryDataService");
  }

  createDb() {
    console.log("========================>InMemoryDataService:createDb");
    return {ENFANTS};
  }
}

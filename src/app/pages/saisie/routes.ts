import {Route} from "@angular/router";
import {NoFoundComponent} from "../no-found/no-found.component";
import {SaisieMoisComponent} from "./saisie-mois/saisie-mois.component";

export const SAISIE_ROUTES: Route[] = [
  {path: 'mois', component: SaisieMoisComponent},
  { //attention interception doit-être en fin de routing
    path : '**', component: NoFoundComponent
  }
];

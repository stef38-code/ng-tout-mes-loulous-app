import {Route} from "@angular/router";
import {ListeEnfantComponent} from "./liste-enfant/liste-enfant.component";
import {EditEnfantComponent} from "./edit-enfant/edit-enfant.component";
import {NoFoundComponent} from "../no-found/no-found.component";

export const ENFANT_ROUTES: Route[] = [
  {path: 'liste', component: ListeEnfantComponent},
  {path: 'editer', component: EditEnfantComponent},
  { //attention interception doit-être en fin de routing
    path : '**', component: NoFoundComponent
  }
];

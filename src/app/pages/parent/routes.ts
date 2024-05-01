import {Route} from "@angular/router";
import {NoFoundComponent} from "../no-found/no-found.component";
import {ListeParentsComponent} from "./liste-parents/liste-parents.component";



export const PARENTS_ROUTES: Route[] = [
  {path: 'liste', component: ListeParentsComponent},
  { //attention interception doit-être en fin de routing
    path : '**', component: NoFoundComponent
  }
];

import {Route} from "@angular/router";
import {NoFoundComponent} from "../no-found/no-found.component";
import {EditParentComponent} from "@pages/parent/edit-parent/edit-parent.component";


export const PARENTS_ROUTES: Route[] = [
  {path: 'editer', component: EditParentComponent},
  { //attention interception doit-être en fin de routing
    path : '**', component: NoFoundComponent
  }
];

import {Route} from "@angular/router";
import {NoFoundComponent} from "../no-found/no-found.component";
import {EditContactComponent} from "@pages/contacts/edit-contact/edit-contact.component";

export const CONTACTS_ROUTES: Route[] = [
  {path: 'editer', component: EditContactComponent},
  { //attention interception doit-être en fin de routing
    path: '**', component: NoFoundComponent
  }
];

import {Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {NoFoundComponent} from "@pages/no-found/no-found.component";


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'enfant', loadChildren: () => import('@pages/enfant/routes').then(mod => mod.ENFANT_ROUTES)},
  {path: 'parents', loadChildren: () => import('@pages/parent/routes').then(mod => mod.PARENTS_ROUTES)},
  {path: 'contacts', loadChildren: () => import('@pages/contacts/routes').then(mod => mod.CONTACTS_ROUTES)},
  {path: 'saisie', loadChildren: () => import('@pages/saisie/routes').then(mod => mod.SAISIE_ROUTES)},
  {path: '', redirectTo: '/enfant', pathMatch: 'full'},
  { //attention interception doit-être en fin de routing
    path : '**', component: NoFoundComponent
  }
];

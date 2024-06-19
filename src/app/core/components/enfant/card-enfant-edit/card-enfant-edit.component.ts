import {Component, Input} from '@angular/core';
import {Enfant} from "@model/enfant";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {CalendarModule} from "primeng/calendar";
import {EditCiviliteEnfantComponent} from "@core/components/enfant/edit-civilite-enfant/edit-civilite-enfant.component";
import {EditFratrieEnfantComponent} from "@core/components/enfant/edit-fratrie-enfant/edit-fratrie-enfant.component";
import {Router} from "@angular/router";


@Component({
  selector: 'card-enfant-edit',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    PaginatorModule,
    CalendarModule,
    EditCiviliteEnfantComponent,
    EditFratrieEnfantComponent
  ],
  providers: [
  ],
  templateUrl: './card-enfant-edit.component.html',
  styleUrl: './card-enfant-edit.component.scss'
})
export class CardEnfantEditComponent {
  @Input() item: Enfant;
  minDate: Date;
  maxDate: Date;

  constructor(private router: Router,) {
    // Max 6 ans, mini la date du jour
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 6, 0, 1);
    this.maxDate = new Date();
  }

  goToListEnfant(item: Enfant) {
    this.router.navigate(['/enfant/liste']);
  }

  goToListEnfants() {
    this.router.navigate(['/enfant/liste']);
  }

  goToEditParents() {
    this.router.navigate(['/parents/editer']);
  }
}

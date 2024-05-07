import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, JsonPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {CardEnfantListComponent} from "@pages/enfant/liste-enfant/card-enfant-list/card-enfant-list.component";
import {EnfantsStore} from "@data/enfants-store";
import {EnfantService} from "@core/services/enfant-service.service";


@Component({
  selector: 'app-liste-enfant',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    MatCardModule,
    FlexLayoutModule,
    MatLabel,
    DatePipe,
    NgOptimizedImage,
    MatIcon,
    MatDivider,
    CardEnfantListComponent,
    JsonPipe
  ],
  providers: [EnfantService, EnfantsStore],
  templateUrl: './liste-enfant.component.html',
  styleUrl: './liste-enfant.component.scss'
})
export class ListeEnfantComponent implements OnInit{

  constructor(readonly store: EnfantsStore) {
  }

  ngOnInit(): void {
    this.store.loadEnfant();
  }


}

import {Component, inject, OnInit} from '@angular/core';
import {EnfantService} from "@core/services/enfant-service.service";
import {Enfant} from "@core/model/enfant";
import {Observable} from "rxjs";
import {AsyncPipe, DatePipe, JsonPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {CardEnfantListComponent} from "@pages/enfant/liste-enfant/card-enfant-list/card-enfant-list.component";
import {EnfantsStore} from "../../../data/enfants-store";


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
  readonly store = inject(EnfantsStore)
  enfantList$: Observable<Enfant[]>;
  enfantArray: Enfant[];
  constructor(private enfantService: EnfantService) {

  }

  ngOnInit(): void {
    this.enfantList$ = this.enfantService
      .getEnfantList();
    this.store.loadEnfant();
  }

  getImage(genre: string): string {
    if (genre == "Fille") {
      return "assets/images/icons8-fille-48.png";
    }
    return "assets/images/icons8-garçon-48.png";
  }
}

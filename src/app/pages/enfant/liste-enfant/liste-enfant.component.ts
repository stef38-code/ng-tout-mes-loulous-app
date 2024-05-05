import {Component, OnInit} from '@angular/core';
import {EnfantService} from "@core/services/enfant-service.service";
import {Enfant} from "@core/model/enfant";
import {Observable} from "rxjs";
import {AsyncPipe, DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import moment from "moment";


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
    MatDivider
  ],
  providers:[EnfantService],
  templateUrl: './liste-enfant.component.html',
  styleUrl: './liste-enfant.component.scss'
})
export class ListeEnfantComponent implements OnInit{
  enfantList$: Observable<Enfant[]>;
  constructor(private enfantService: EnfantService) {
  }

  ngOnInit(): void {
    this.enfantList$ = this.enfantService
      .getEnfantList();

  }

  getImage(genre: string): string {
    if (genre == "Fille") {
      return "assets/images/icons8-fille-48.png";
    }
    return "assets/images/icons8-garçon-48.png";
  }

  getNgJours(enfant: Enfant): string {


    let one_day = 1000 * 60 * 60 * 24;
    console.group("Anniversaire:" + enfant.prenom)
    let dateAnniversaire: Date = new Date(enfant.dateNaissance);
    console.log("enfant", dateAnniversaire)
    let dateJour: Date = new Date();
    dateJour.setHours(0, 0, 0, 0);
    let christmas_day: Date =
      new Date(dateJour.getFullYear(), dateAnniversaire.getMonth(), dateAnniversaire.getDay() - 1);
    console.log("date du jour", dateJour)

    //Si le mois est déjà passé
    // ou si le mois est en cours mais le jour est passé
    if (
      dateJour.getMonth() > dateAnniversaire.getMonth()
      ||
      (dateJour.getMonth() == dateAnniversaire.getMonth() && dateJour.getDay() > dateAnniversaire.getDay())

    ) {
      console.log("+1")
      christmas_day =
        new Date(dateJour.getFullYear() + 1, dateAnniversaire.getMonth(), dateAnniversaire.getDay());
      console.log(
        moment({
          y: dateJour.getFullYear() + 1,
          M: dateAnniversaire.getMonth(),
          d: dateAnniversaire.getDay(),
          h: 0,
          m: 0,
          s: 0,
          ms: 0
        }).toString()
      )
    } else {
      christmas_day =
        new Date(dateJour.getFullYear(), dateAnniversaire.getMonth(), dateAnniversaire.getDay() - 1);
      console.log(
        moment({
          y: dateJour.getFullYear(),
          M: dateAnniversaire.getMonth(),
          d: dateAnniversaire.getDay() - 1,
          h: 0,
          m: 0,
          s: 0,
          ms: 0
        }).toString()
      )
    }


    console.log("date prochain", christmas_day)

    const diffInDays = moment(christmas_day).diff(moment(dateJour), 'days');

    console.log("Nombre de jours", diffInDays)
    console.log("controle", moment(dateJour).add(diffInDays, 'days').toString())
    console.groupEnd()
// To display the final_result value
    return diffInDays + " days";

  }

}

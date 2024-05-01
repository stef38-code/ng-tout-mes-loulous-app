import {Component, OnInit} from '@angular/core';
import {EnfantService} from "../../../core/services/enfant-service.service";
import {Enfant} from "../../../core/model/enfant";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-liste-enfant',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
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

}

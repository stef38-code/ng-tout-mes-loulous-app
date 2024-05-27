import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Enfant} from "@model/enfant";
import {EnfantService} from "@core/services/enfant-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'fratrie-component',
  standalone: true,
  imports: [
    ButtonModule
  ],
  providers: [EnfantService],
  templateUrl: './fratrie-component.component.html',
  styleUrl: './fratrie-component.component.scss'
})
export class FratrieComponentComponent {
  @Input()
  id: number;
  fraterie: Enfant;
  fraterie$: Observable<Enfant>;

  /*constructor(private enfantService: EnfantService) {
    this.fraterie$.pipe(
      map(
        return this.enfantService.getEnfantById(this.id).subscribe( resultat => )
      )
    )
  }*/

  goTo() {

  }
}

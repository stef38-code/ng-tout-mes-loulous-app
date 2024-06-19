import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "@model/personne";
import {
  EditTelephonePersonneComponent
} from "@core/components/personne/edit-telephone-personne/edit-telephone-personne.component";
import {
  EditCivilitePersonneComponent
} from "@core/components/personne/edit-civilite-personne/edit-civilite-personne.component";
import {
  EditAdressePersonneComponent
} from "@core/components/personne/edit-adresse-personne/edit-adresse-personne.component";
import {EditEmailPersonneComponent} from "@core/components/personne/edit-email-personne/edit-email-personne.component";
import {PanelModule} from "primeng/panel";
import {
  EditTelEmailPersonneComponent
} from "@core/components/personne/edit-tel-email-personne/edit-tel-email-personne.component";
import {ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'edit-component-personne',
  standalone: true,
  imports: [
    EditTelephonePersonneComponent,
    EditCivilitePersonneComponent,
    EditAdressePersonneComponent,
    EditEmailPersonneComponent,
    PanelModule,
    EditTelEmailPersonneComponent,
    ReactiveFormsModule

  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
  templateUrl: './edit-component-personne.component.html',
  styleUrl: './edit-component-personne.component.scss'
})
export class EditComponentPersonne implements OnInit {
  formEditComponentPersonne = new FormGroup({});
  @Input() personne: Personne;
  parent: FormGroupDirective;
  @Input() index: number;

  constructor(parent: FormGroupDirective) {
    this.parent = parent;
  }

  ngOnInit(): void {
    this.parent.form.addControl(`${this.index}_parent`, this.formEditComponentPersonne);
  }
}

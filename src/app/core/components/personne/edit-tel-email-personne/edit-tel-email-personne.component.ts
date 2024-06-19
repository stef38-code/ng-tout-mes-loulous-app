import {Component, Input, OnInit} from '@angular/core';
import {EditEmailPersonneComponent} from "@core/components/personne/edit-email-personne/edit-email-personne.component";
import {
  EditTelephonePersonneComponent
} from "@core/components/personne/edit-telephone-personne/edit-telephone-personne.component";
import {Personne} from "@model/personne";
import {ControlContainer, FormGroup, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'edit-tel-email-personne',
  standalone: true,
  imports: [
    EditEmailPersonneComponent,
    EditTelephonePersonneComponent,
    ReactiveFormsModule
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
  templateUrl: './edit-tel-email-personne.component.html',
  styleUrl: './edit-tel-email-personne.component.scss'
})
export class EditTelEmailPersonneComponent implements OnInit {
  @Input()
  personne: Personne;
  @Input() index: number = 0;
  parent: FormGroupDirective;
  formTelephones: FormGroup = new FormGroup({});
  formEmails: FormGroup = new FormGroup({});

  constructor(parent: FormGroupDirective) {
    this.parent = parent;
  }

  ngOnInit(): void {
    this.parent.form.addControl(`${this.index}_Telephones`, this.formTelephones);
    this.parent.form.addControl(`${this.index}_Emails`, this.formEmails);
  }
}

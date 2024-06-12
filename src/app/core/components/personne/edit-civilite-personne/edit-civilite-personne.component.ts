import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "@model/personne";
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgIf} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-civilite-personne',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    PanelModule,
    SelectButtonModule,
    CheckboxModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,

  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
  templateUrl: './edit-civilite-personne.component.html',
  styleUrl: './edit-civilite-personne.component.scss'
})
export class EditCivilitePersonneComponent implements OnInit {
  parent: FormGroupDirective;
  @Input() index: number = 0;
  @Input() personne: Personne;
  @Input() isParent: boolean = false;

  maxDate: Date;
  anniversaire: Date;

  stateOptions: any[] = [{label: 'Madame', value: 'F'}, {label: 'Monsieur', value: 'M'}];
  civiliteForm: FormGroup;


  constructor(private fb: FormBuilder, parent: FormGroupDirective) {
    this.maxDate = new Date();
    this.parent = parent;
  }

  ngOnInit(): void {

    this.civiliteForm = this.fb.group({
      nom: new FormControl(this.personne.nom, Validators.required),
      prenom: new FormControl(this.personne.prenom, Validators.required),
      genre: new FormControl(this.personne.genre, Validators.required),
      divorce: new FormControl(this.personne.divorcer, Validators.required),
      dateNaissance: new FormControl(this.personne.divorcer, Validators.required),
    });


    this.parent.form.addControl(`${this.index}_civilite`, this.civiliteForm);

  }

}

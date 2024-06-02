import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Personne} from "@model/personne";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
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
  providers: [
  ],
  templateUrl: './edit-civilite-personne.component.html',
  styleUrl: './edit-civilite-personne.component.scss'
})
export class EditCivilitePersonneComponent implements OnInit {

  @Input() index: number = 0;
  @Input() personne: Personne;
  @Input() isParent: boolean = false;
  @Input() parentFormGroup: FormGroup;

  maxDate: Date;
  anniversaire: Date;

  stateOptions: any[] = [{label: 'Madame', value: 'F'}, {label: 'Monsieur', value: 'M'}];
  civiliteForm: FormGroup;
  nom: FormControl<string> = new FormControl<string | null>(null);
  prenom: FormControl<string> = new FormControl<string | null>(null);

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.maxDate = new Date();

  }

  ngOnInit(): void {

    this.civiliteForm = this.fb.group({
      nom: [this.personne.nom, Validators.required],
      prenom: [this.personne.prenom, Validators.required],
    });


    this.parentFormGroup.addControl(`civilite ${this.index}`, this.civiliteForm);


    /*    this.nom.setValue(this.personne.nom);
        this.prenom.setValue(this.personne.prenom);*/
    this.cd.detectChanges();

  }


}

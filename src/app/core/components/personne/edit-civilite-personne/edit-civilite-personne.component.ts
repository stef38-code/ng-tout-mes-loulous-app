import {Component, Inject, Input, OnInit} from '@angular/core';
import {Personne} from "@model/personne";
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormControlStatus,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {SelectButtonModule} from "primeng/selectbutton";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from 'primeng/messages';
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";
import {
  ValidateurLettresEspacesTiretsDirective
} from "@core/components/directives/validators/validateur-lettres-espaces-tirets";
import {filter} from "rxjs";
import {Message} from "primeng/api";

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
    JsonPipe,
    MessagesModule
  ],
  providers: [
    ValidateurLettresEspacesTiretsDirective // Enregistrer le Validator
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

  messagesNom: Message[] | undefined;


  nom: FormControl = new FormControl();
  prenom = new FormControl();
  genre = new FormControl();
  divorce = new FormControl();
  dateNaissance = new FormControl();

  constructor(private fb: FormBuilder,
              parent: FormGroupDirective,
              @Inject(ValidateurLettresEspacesTiretsDirective) private validateurLettresEspacesTirets: ValidateurLettresEspacesTiretsDirective
  ) {
    this.maxDate = new Date();
    this.parent = parent;
    this.nom.statusChanges.pipe(
      filter((status: FormControlStatus) => status != "VALID")
    ).subscribe({
        next: () => {
          this.messagesNom = [{severity: 'error', summary: this.nom.getError('erreur')}]
        }
      }
    );
  }

  ngOnInit(): void {

    this.nom.setValidators([Validators.required, this.validateurLettresEspacesTirets.validate]);
    this.nom.setValue(this.personne.nom);

    this.civiliteForm = this.fb.group({});

    this.civiliteForm.addControl("nom", this.nom);
    this.civiliteForm.addControl("prenom", this.prenom);
    this.civiliteForm.addControl("genre", this.genre);
    this.civiliteForm.addControl("divorce", this.divorce);
    this.civiliteForm.addControl("dateNaissance", this.dateNaissance);

    /*this.civiliteForm = this.fb.group({
      this.nom,
      prenom: new FormControl(this.personne.prenom, Validators.required),
      genre: new FormControl(this.personne.genre, Validators.required),
      divorce: new FormControl(this.personne.divorcer, Validators.required),
      dateNaissance: new FormControl(this.personne.divorcer, Validators.required),
    });*/


    this.parent.form.addControl(`${this.index}_civilite`, this.civiliteForm);

  }

}

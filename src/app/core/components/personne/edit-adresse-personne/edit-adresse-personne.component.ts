import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Adresse} from "@model/adresse";
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'edit-adresse-personne',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    FloatLabelModule
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditAdressePersonneComponent),
    multi: true,
  }],
  templateUrl: './edit-adresse-personne.component.html',
  styleUrl: './edit-adresse-personne.component.scss'
})
export class EditAdressePersonneComponent implements OnInit {
  parent: FormGroupDirective;
  adresseForm: FormGroup;
  @Input() adresse: Adresse;
  @Input() index: number = 0;

  constructor(private fb: FormBuilder, parent: FormGroupDirective) {
    this.parent = parent;
  }

  ngOnInit(): void {
    this.adresseForm = this.fb.group({
      rue: new FormControl(this.adresse.rue, Validators.required),
      codePostal: new FormControl(this.adresse.codePostal, Validators.required),
      ville: new FormControl(this.adresse.ville, Validators.required),
    });
    this.parent.form.addControl(`${this.index}_adresse`, this.adresseForm);
  }

}

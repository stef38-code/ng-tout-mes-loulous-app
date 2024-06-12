import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {Telephone} from "@model/telephone";

@Component({
  selector: 'telephone-component',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TelephoneComponentComponent),
    multi: true,
  }
  ],
  templateUrl: './telephone-component.component.html',
  styleUrl: './telephone-component.component.scss'
})
export class TelephoneComponentComponent implements OnInit {
  @Input() telephone: Telephone;
  @Input() index: number = 0;
  parent: FormGroupDirective;
  telephoneForm: FormGroup;

  constructor(private fb: FormBuilder, parent: FormGroupDirective) {
    this.parent = parent;
  }

  ngOnInit(): void {
    this.telephoneForm = this.fb.group({
      numero: new FormControl(this.telephone.numero, Validators.required),
    });
    this.parent.form.addControl(`${this.index}_telephone_${this.telephone.type}`, this.telephoneForm);
  }
}

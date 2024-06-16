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
import {Email} from "@model/email";

@Component({
  selector: 'mail-component',
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
    useExisting: forwardRef(() => MailComponentComponent),
    multi: true,
  }],
  templateUrl: './mail-component.component.html',
  styleUrl: './mail-component.component.scss'
})
export class MailComponentComponent implements OnInit {
  parent: FormGroupDirective;
  @Input() email: Email;
  @Input() index: number = 0;
  mailForm: FormGroup

  constructor(private fb: FormBuilder, parent: FormGroupDirective) {
    this.parent = parent;
  }

  ngOnInit(): void {
    //console.table(this.email)
    this.mailForm = this.fb.group({
      adresse: new FormControl(this.email.adresse, Validators.required),
    });
    this.parent.form.addControl(`${this.index}_email_${this.email.type}`, this.mailForm);
  }
}

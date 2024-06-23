import {Component, Input, OnInit} from '@angular/core';
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {ControlContainer, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-component',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
  templateUrl: './text-component.component.html',
  styleUrl: './text-component.component.scss'
})
export class TextComponentComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  fCNText: FormControl;
  erreur: string | undefined;

  constructor(private fgd: FormGroupDirective, private fb: FormBuilder) {
    this.fCNText = new FormControl();
  }

  ngOnInit(): void {
    console.log("----1")
    //this.fCNText.setValidators([Validators.required]);
    console.log("----2")
    //this.fCNText.setValue(this.value);
    console.log("----3")
    //this.fgd.form?.addControl(`${this.label}_text`, this.fCNText);
    console.log("----4")
  }
}

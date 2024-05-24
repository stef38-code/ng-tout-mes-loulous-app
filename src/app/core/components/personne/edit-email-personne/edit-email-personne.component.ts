import {Component, Input} from '@angular/core';
import {Email} from "@model/email";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "primeng/panel";
import {SharedModule} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'edit-email-personne',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    SharedModule,
    InputTextModule
  ],
  templateUrl: './edit-email-personne.component.html',
  styleUrl: './edit-email-personne.component.scss'
})
export class EditEmailPersonneComponent {
  @Input() emails: Email[];
}

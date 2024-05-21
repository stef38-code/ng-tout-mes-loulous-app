import {Component} from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {EnfantBorderCardDirective} from "@core/components/enfant/card-enfant/directives/enfant-border-card.directive";
import {FlexModule} from "@angular/flex-layout";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatLabel} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'card-enfant-new',
  standalone: true,
  imports: [
    DatePipe,
    EnfantBorderCardDirective,
    FlexModule,
    MatButton,
    MatCard,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardTitleGroup,
    MatDivider,
    MatLabel,
    NgOptimizedImage,
    MatIconButton,
    MatIconModule
  ],
  templateUrl: './card-enfant-new.component.html',
  styleUrl: './card-enfant-new.component.scss'
})
export class CardEnfantNewComponent {

}

import {Component} from '@angular/core';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-no-found',
  standalone: true,
  imports: [ProgressBarModule, ToastModule],
  templateUrl: './no-found.component.html',
  styleUrl: './no-found.component.scss'
})
export class NoFoundComponent {

}

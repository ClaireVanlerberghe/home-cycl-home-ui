import { Component } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: true,
    imports: [],
})
export class SignupComponent {
  value: string | undefined;
}

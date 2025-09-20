import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule, ReactiveFormsModule],
})
export class LoginComponent {

    loginForm: FormGroup= new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
 
    constructor(private auth: AuthService, private router: Router) {}

  login(username: string, password: string) {
    console.log(username, password);
    if (this.auth.login(username, password)) {
      this.router.navigate(['/home']);
    }
  }
}

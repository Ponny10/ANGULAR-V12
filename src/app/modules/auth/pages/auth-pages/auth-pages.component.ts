import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from '@modules/auth/services/auth-services.service';

@Component({
  selector: 'app-auth-pages',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './auth-pages.component.html',
  styleUrl: './auth-pages.component.css'
})
export class AuthPagesComponent implements OnInit{

  formLogin: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthServicesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.formLogin = new FormGroup({
        'email': new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        'password': new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
        ]),
      })
  }

  onSubmit() {
    const {email, password} = this.formLogin.value;
    this.authService.singIn(email, password).subscribe((resp) => {
      this.router.navigate(['/tracks']);
    }, (failed: any) => {
      const {error: {error}} = failed;
      // TODO: Un suscribe puede detonar un error también, como este.
      console.log(error);
      
    });
    
  }
}

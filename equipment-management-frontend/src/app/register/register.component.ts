import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonneService } from "../Service/PersonneService";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  registreForm!: FormGroup;
  Roles: string[] = ['ROLE_USER', 'ROLE_TECHNICIEN', 'ROLE_ADMIN'];

  constructor(
    private fb: FormBuilder,
    private srv: PersonneService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registreForm = this.fb.group({
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
      fonction: [''],
      specialite: [''],
      type: [''],
      username: ['']
    });

    this.registreForm.get('role')?.valueChanges.subscribe(value => {
      if (value === 'ROLE_USER') {
        this.registreForm.get('fonction')?.setValidators(Validators.required);
        this.registreForm.get('specialite')?.clearValidators();
      } else if (value === 'ROLE_TECHNICIEN') {
        this.registreForm.get('specialite')?.setValidators(Validators.required);
        this.registreForm.get('fonction')?.clearValidators();
      } else {
        this.registreForm.get('fonction')?.clearValidators();
        this.registreForm.get('specialite')?.clearValidators();
      }
      this.registreForm.get('fonction')?.updateValueAndValidity();
      this.registreForm.get('specialite')?.updateValueAndValidity();
    });
  }

  register(): void {
    if (this.registreForm.valid) {
      const formData = this.registreForm.value;
      formData.type = this.mapRoleToType(formData.role);

      this.srv.register(formData).subscribe(
        () => {
          this.route.navigateByUrl("login");
        },
        (error) => {
          console.error('Registration failed', error);
          // Display error to the user
        }
      );

      console.log(formData);
    }
  }
   /*register(user: Personne): Observable<any> {
   return this.http.post(`${this.apiUrl}/register`, user, { responseType: 'text' }).pipe(
    catchError(error => {
   console.error('Registration error', error);
   return throwError(error);
   })
    );
    }*/


private mapRoleToType(role: string): string {
    switch (role) {
      case 'ROLE_USER':
        return 'user';
      case 'ROLE_TECHNICIEN':
        return 'technicien';
      case 'ROLE_ADMIN':
        return 'admin';
      default:
        return '';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { AdminLoginService } from './admin-login.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.adminFormGroup = this.formBuilder.group(
      {
        username: [''],
        password: [''],
      }
    )
  }

  onAdminLogin() {
    console.log(this.adminFormGroup.value);
    let loginStatus = this.adminLoginService
      .checkAdminLoginDetails(this.adminFormGroup.value)
      .subscribe(
        response => {
          if (response) {
            localStorage.setItem('adminUser', JSON.stringify(this.adminFormGroup.value));
            this.router.navigate(['/admindash', { relativeTo: this.route }]);
          } else {
              alert("not a valid user");
          }
        }
      );
    console.log(loginStatus);
  }
}

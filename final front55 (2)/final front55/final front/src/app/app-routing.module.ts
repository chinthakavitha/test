import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserBooklistComponent } from './user/user-booklist/user-booklist.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AdminRecipeCrudComponent } from './admin/admin-recipe-crud/admin-recipe-crud.component';
import { UserRecipeDetailComponent } from './user/user-recipe-detail/user-recipe-detail.component';
import { AthGuard } from './ath.guard';
import { AtthGuard } from './atth.guard';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'userreg', component: UserRegisterComponent },

  { path: 'userdash', component: UserDashboardComponent,canActivate:[AtthGuard]},
  { path: 'userbklst', component: UserBooklistComponent,canActivate:[AtthGuard] },
  { path: 'userdetails/:id', component: UserRecipeDetailComponent,canActivate:[AtthGuard] },

  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'admindash', component: AdminDashboardComponent,canActivate:[AthGuard] },
  { path: 'admincrud', component: AdminRecipeCrudComponent,canActivate:[AthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

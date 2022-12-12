import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusComponent } from './bus/bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { BusGuard } from './bus.guard';

const routes: Routes = [
{path: "bus", component : BusComponent},
{path: 'add-bus', component: ForbiddenComponent, canActivate:[BusGuard]},
{path: "", redirectTo: "bus", pathMatch:"full"},
{path: "updateBus/:id", component: UpdateBusComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

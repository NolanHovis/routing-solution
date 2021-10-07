import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { SideDisplayComponent } from './other/side-display/side-display.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'other',
    component: OtherComponent,
    children: [{ path: 'side', component: SideDisplayComponent }],
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

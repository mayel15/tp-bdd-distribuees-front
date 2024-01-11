import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMembreComponent } from './pages/page-membre/page-membre.component';
import { PageGroupeComponent } from './pages/page-groupe/page-groupe.component';
import { PageMaterielComponent } from './pages/page-materiel/page-materiel.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';


const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'membre', component: PageMembreComponent },
  { path: 'groupe', component: PageGroupeComponent },
  { path: 'materiel', component: PageMaterielComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

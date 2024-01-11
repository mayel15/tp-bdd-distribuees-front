import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormulaireMembreComponent } from './components/formulaire-membre/formulaire-membre.component';
import { PageMembreComponent } from './pages/page-membre/page-membre.component';
import { PageGroupeComponent } from './pages/page-groupe/page-groupe.component';
import { PageMaterielComponent } from './pages/page-materiel/page-materiel.component';
import { FormulaireGroupeComponent } from './components/formulaire-groupe/formulaire-groupe.component';
import { FormulaireMaterielComponent } from './components/formulaire-materiel/formulaire-materiel.component';
import { NavbarBackComponent } from './components/navbar-back/navbar-back.component';
import { WelcomeIMGComponent } from './components/welcome-img/welcome-img.component';
import { WelcomeTitleComponent } from './components/welcome-title/welcome-title.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { GroupTitleComponent } from './components/group-title/group-title.component';
import { MembreTitleComponent } from './components/membre-title/membre-title.component';
import { MaterielTitleComponent } from './components/materiel-title/materiel-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormulaireMembreComponent,
    PageMembreComponent,
    PageGroupeComponent,
    PageMaterielComponent,
    FormulaireGroupeComponent,
    FormulaireMaterielComponent,
    NavbarBackComponent,
    WelcomeIMGComponent,
    WelcomeTitleComponent,
    PageHomeComponent,
    GroupTitleComponent,
    MembreTitleComponent,
    MaterielTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

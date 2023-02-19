import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentsComponent } from './pages/absents/absents.component';

import { TirageComponent } from './pages/tirage/tirage.component';

const routes: Routes = [
//je créer mon chemein vers mes pages pour l'instant ça marche pas mais je vais bien finir par trouver
  {
    path:"",
    component: TirageComponent,
  },
  {
    path:"absents",
    component: AbsentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

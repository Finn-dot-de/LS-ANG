import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwpComponent } from './Components/sites/awp/awp.component';
import { PlusdComponent } from './Components/sites/plusd/plusd.component';
import { ItsComponent } from './Components/sites/its/its.component';
import { IttkComponent } from './Components/sites/ittk/ittk.component';
import { IttaComponent } from './Components/sites/itta/itta.component';
import { SchnelluebungComponent } from './Components/sites/schnelluebung/schnelluebung.component';
import { IntensiveuebungenComponent } from './Components/sites/intensiveuebungen/intensiveuebungen.component';
import { MischuebungenComponent } from './Components/sites/mischuebungen/mischuebungen.component';
import { LangzeitComponent } from './Components/sites/langzeit/langzeit.component';
import { NochzuebenComponent } from './Components/sites/nochzueben/nochzueben.component';
import { EigeneuebungenComponent } from './Components/sites/eigeneuebungen/eigeneuebungen.component';
import { NormaluebungenComponent } from './Components/sites/normaluebungen/normaluebungen.component';
import { LoginComponent } from './Components/Subcomponents/login/login.component';

const routes: Routes = [
  { path: 'awp', component: AwpComponent },
  { path: 'plusd', component: PlusdComponent },
  { path: 'its', component: ItsComponent },
  { path: 'ittk', component: IttkComponent },
  { path: 'itta', component: IttaComponent },
  { path: 'schnelluebung', component: SchnelluebungComponent },
  { path: 'intensiveuebungen', component: IntensiveuebungenComponent },
  { path: 'mischuebungen', component: MischuebungenComponent },
  { path: 'langzeit', component: LangzeitComponent },
  { path: 'nochzueben', component: NochzuebenComponent },
  { path: 'eigeneuebungen', component: EigeneuebungenComponent },
  { path: 'normaluebungen', component: NormaluebungenComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

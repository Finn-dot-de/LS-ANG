import {Routes} from "@angular/router";
import {LangzeitComponent} from "../sites/Statistik/langzeit/langzeit.component";
import {NochzuebenComponent} from "../sites/Statistik/nochzueben/nochzueben.component";
import {SchnelluebungComponent} from "../sites/utils/schnelluebung/schnelluebung.component";
import {IntensiveuebungenComponent} from "../sites/utils/intensiveuebungen/intensiveuebungen.component";
import {MischuebungenComponent} from "../sites/utils/mischuebungen/mischuebungen.component";
import {EigeneuebungenComponent} from "../sites/utils/eigeneuebungen/eigeneuebungen.component";
import {NormaluebungenComponent} from "../sites/utils/normaluebungen/normaluebungen.component";
import {StoffseiteComponent} from "../sites/LernSeiten/stoffseite/stoffseite.component";


export const routes: Routes = [
  {path: 'schnelluebung', component: SchnelluebungComponent},
  {path: 'intensiveuebungen', component: IntensiveuebungenComponent},
  {path: 'mischuebungen', component: MischuebungenComponent},
  {path: 'langzeit', component: LangzeitComponent},
  {path: 'nochzueben', component: NochzuebenComponent},
  {path: 'eigeneuebungen', component: EigeneuebungenComponent},
  {path: 'normaluebungen', component: NormaluebungenComponent},
  {path: 'mischuebungen', component: MischuebungenComponent},
];

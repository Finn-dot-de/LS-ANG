import {Routes} from "@angular/router";
import {AwpComponent} from "../sites/FächerSeiten/awp/awp.component";
import {PlusdComponent} from "../sites/FächerSeiten/plusd/plusd.component";
import {ItsComponent} from "../sites/FächerSeiten/its/its.component";
import {IttkComponent} from "../sites/FächerSeiten/ittk/ittk.component";
import {IttaComponent} from "../sites/FächerSeiten/itta/itta.component";
import {SchnelluebungComponent} from "../sites/LernSeiten/schnelluebung/schnelluebung.component";
import {IntensiveuebungenComponent} from "../sites/LernSeiten/intensiveuebungen/intensiveuebungen.component";
import {MischuebungenComponent} from "../sites/LernSeiten/mischuebungen/mischuebungen.component";
import {LangzeitComponent} from "../sites/Statistik/langzeit/langzeit.component";
import {NochzuebenComponent} from "../sites/Statistik/nochzueben/nochzueben.component";
import {EigeneuebungenComponent} from "../sites/LernSeiten/eigeneuebungen/eigeneuebungen.component";
import {NormaluebungenComponent} from "../sites/LernSeiten/normaluebungen/normaluebungen.component";

export const routes: Routes = [
  {path: 'awp', component: AwpComponent},
  {path: 'plusd', component: PlusdComponent},
  {path: 'its', component: ItsComponent},
  {path: 'ittk', component: IttkComponent},
  {path: 'itta', component: IttaComponent},
  {path: 'schnelluebung', component: SchnelluebungComponent},
  {path: 'intensiveuebungen', component: IntensiveuebungenComponent},
  {path: 'mischuebungen', component: MischuebungenComponent},
  {path: 'langzeit', component: LangzeitComponent},
  {path: 'nochzueben', component: NochzuebenComponent},
  {path: 'eigeneuebungen', component: EigeneuebungenComponent},
  {path: 'normaluebungen', component: NormaluebungenComponent},
];

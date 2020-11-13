import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JajananComponent } from './jajanan/jajanan.component';
import { PemasokComponent } from './pemasok/pemasok.component';

const routes: Routes = [
  { path: 'jajanan', component: JajananComponent },
  { path: 'pemasok', component: PemasokComponent},
  { path: '', redirectTo: '/jajanan', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index.component';
import { AboutComponent } from './views/about.component';
import { Page404 } from './views/404.comopnent';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: Page404 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ContentListComponent },
  { path: 'detail/:id', component: ContentDetailComponent },
  { path: '**', redirectTo: '/list' } // handle invalid urls
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

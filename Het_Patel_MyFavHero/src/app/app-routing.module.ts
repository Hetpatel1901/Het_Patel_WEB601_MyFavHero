import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { Component } from '@angular/core';
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
export class AppRoutingModule {
  const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: ContentListComponent },
    { path: 'detail/:id', component: ContentDetailComponent },
    { path: '**', component: this.PageNotFoundComponent } // handle invalid urls
  ];
  

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="page-not-found">
      <h1>Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <a routerLink="/list">Back to List</a>
    </div>
  `,
  styles: [
    `
      .page-not-found {
        text-align: center;
        margin-top: 50px;
      }
    `
  ]
})
export class: any PageNotFoundComponent: any {}
 }

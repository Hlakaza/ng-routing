import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { SecretComponent } from './pages/secret/secret.component';
import { AuthGuard } from './auth.guard';


const albums = [];
  albums.push({
    id: 1,
    name: 'Birds',
    description: 'Photos of birds.',
    image: 'assets/img/birds.jpeg'
  }, {
    id: 2,
    name: 'Mountains',
    description: 'Photos of mountains.',
    image: 'assets/img/mountains.jpeg'
  }, {
    id: 3,
    name: 'Cities',
    description: 'Photos of cities.',
    image: 'assets/img/cities.jpeg'
  });

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  {
    path: 'albums',
    data: { api: 'https://pixabay.com/api/', albums},
    component: AlbumsComponent,
    children: [
      { path: '', component: AlbumListComponent },
      { path: 'view/:id', component: AlbumDetailsComponent, canActivate: [AuthGuard] },
    ]
  },
  // { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

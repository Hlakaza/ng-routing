import { Component, OnInit, Input } from '@angular/core';
import { Album } from './album';
import { AuthService } from '../../auth.service';
import { ToastsManager } from 'ng6-toastr';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;

  constructor(readonly authService: AuthService, readonly toast: ToastsManager) { }
  checklogin() {
    if (!this.authService.loggedIn) {
       this.toast.error('You need to be loggedin to access this!', 'Login!');
    }
  }
  ngOnInit() {
  }

}

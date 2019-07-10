import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng6-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    readonly toast: ToastsManager,
    readonly vcr: ViewContainerRef,
    private authService: AuthService,
    private router: Router
  ) {
    this.toast.setRootViewContainerRef(vcr);
  }

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.toast.success('You are logged in!', 'Success!');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.toast.warning('You are logged out!');
  }
}

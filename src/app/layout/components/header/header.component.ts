import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router: Router,
  ) { }

  ngOnInit() { }

  goEventList = () => this.router.navigateByUrl('event');

  isAuthenticated = () => this.loginService.isAuthenticated();

  logout = () => {
    this.loginService.signOut();
    this.router.navigateByUrl('login');
  }

}

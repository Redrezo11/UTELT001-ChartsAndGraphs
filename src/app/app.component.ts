import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Pie Chart Exercises',
      url: '/list',
      icon: 'radio-button-off'
    },

    {
      title: 'Line Graph Exercises',
      url: '/linegraph',
      icon: 'trending-up'
    },
    {
      title: 'Templates',
      url: '/templates',
      icon: 'albums'
    },

    {
      title: 'Comparitives',
      url: '/comparative',
      icon: 'stats'
    },

    {
      title: 'Graph Compare',
      url: '/graphcompare',
      icon: 'stats'
    },
    {
      title: 'Resources',
      url: '/resources',
      icon: 'book'
    }
    

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.page.html',
  styleUrls: ['./comparative.page.scss'],
})
export class ComparativePage implements OnInit {

  A1: string = 'nada';
  drone: Array<string>;

  answer: Array<string>;
  answer2: Array<string>;

  test: boolean = false;
  test2: boolean = false;
 // q1: boolean = false; // flag to display whether question one is correct 
 // q1i: boolean = false; // flag to display whether user is an idiot

  q: Array<boolean>;
  qi: Array<boolean>;

  d: Array<boolean>;
  di: Array<boolean>;


  constructor() {
    this.drone = ['','','',''];
    this.answer = ['','','','','','','',''];
    this.answer2 = ['','', '', '','','','',''];
    this.q = [false, false, false, false, false];
    this.qi = [false, false, false, false, false];

    this.d = [false, false, false, false, false];
    this.di = [false, false, false, false, false];


   }

  checkQ1() {
    if (this.answer[0]==='more'&&this.answer2[0]==='than') 
    {
      this.qi[0] = false;
      this.q[0]= true;
    }
    else {
      this.qi[0] = true;
      this.q[0] = false;
    }
  }

  checkQ2() {
    if (this.answer[1]==='less'&&this.answer2[1]==='than') 
    {
      this.qi[1] = false;
      this.q[1]= true;
    }
    else {
      this.qi[1] = true;
      this.q[1] = false;
    }
  }


  checkQ3() {
    if (this.answer[2]==='more'&&this.answer2[2]==='than') 
    {
      this.qi[2] = false;
      this.q[2]= true;
    }
    else {
      this.qi[2] = true;
      this.q[2] = false;
    }
  }

  checkQ4() {
    if (this.answer[3]==='fruits'&&this.answer2[3]==='store') 
    {
      this.qi[3] = false;
      this.q[3]= true;
    }
    else {
      this.qi[3] = true;
      this.q[3] = false;
    }
  }

  checkQ5() {
    if (this.answer[4]==='trend'&&this.answer2[4]==='fruits') 
    {
      this.qi[4] = false;
      this.q[4]= true;
    }
    else {
      this.qi[4] = true;
      this.q[4] = false;
    }
  }

  checkQM1() {
    if (this.drone[0]=='b1') {
      this.di[0]=false;
      this.d[0]=true;
    }
    else {
      this.di[0]=true;
      this.d[0]=false;
    }
  }

  checkQM2() {
    if (this.drone[1]=='c2') {
      this.di[1]=false;
      this.d[1]=true;
    }
    else {
      this.di[1]=true;
      this.d[1]=false;
    }
  }

  checkQM3 () {
    if (this.drone[2]=='b3') {
      this.di[2]=false;
      this.d[2]=true;
    }
    else {
      this.di[2]=true;
      this.d[2]=false;
    }
  }

  
  ngOnInit() {
  }


}

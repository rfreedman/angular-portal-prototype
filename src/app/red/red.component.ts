import {Component, Input, OnInit} from '@angular/core';
import {PortalComponent} from '../portal/portal.component';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import {Subscriber} from 'rxjs/Subscriber';




@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements PortalComponent, OnInit {
  @Input() config: any;
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toISOString()), 1000);
  });

  constructor() { }

  ngOnInit() {
  }
}

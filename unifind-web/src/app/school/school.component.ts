import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor(public data: DataService) {
  }
  ngOnInit() {
  }

}

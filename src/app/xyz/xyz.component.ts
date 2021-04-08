import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  title_page = 'Banana';
  num_arr = [
    1,2,3
  ];

  data_json = [
    {
      title: 'aaa',
      data: '555'
    },
    {
      title: 'bbb',
      data: '444'
    },
    {
      title: 'ddd',
      data: '666'
    },
  ];

  // animal;

  constructor(private route: ActivatedRoute) { 
    // this.animal = this.route.snapshot.paramMap.get("name");
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
  }

  ngOnInit(): void {
  }

}

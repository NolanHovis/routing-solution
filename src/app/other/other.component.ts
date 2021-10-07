import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent implements OnInit {
  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {}

  onGoSomewhere() {
    this.route.navigate(['new'], { relativeTo: this.router });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-parameter',
  template: `The route parameter is '<code>{{routeParameter}}</code>'`
})
export class RouteParameterComponent implements OnInit, OnDestroy {
  routeParameter: string;

  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.routeParameter = params['id'];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}

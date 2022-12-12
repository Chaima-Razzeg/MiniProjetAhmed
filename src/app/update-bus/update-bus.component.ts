import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../services/bus.service';
import { Bus } from '../model/bus.model';
@Component({
selector: 'app-update-bus',
templateUrl: './update-bus.component.html',


styles: []
})
export class UpdateBusComponent implements OnInit {
currentBus = new Bus();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private busService: BusService) { }

ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentBus = this.busService.consulterBus(this.activatedRoute.snapshot. params['id']);
console.log(this.currentBus);
} 
updateBus()
{ //console.log(this.currentProduit);
this.busService.updateBus(this.currentBus);
this.router.navigate(['bus']);
}}
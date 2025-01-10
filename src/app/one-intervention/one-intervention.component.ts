import { Component, OnInit } from '@angular/core';
import { InterventionsService } from '../services/interventions.service';
import { ActivatedRoute } from '@angular/router';
import { AreasService } from '../services/area.service';

@Component({
  selector: 'app-one-intervention',
  templateUrl: './one-intervention.component.html',
  styleUrls: ['./one-intervention.component.scss']
})
export class OneInterventionComponent implements OnInit {

  intervention: any = null;

  areas: any = null

  addressCustomer: any = null

  latitude: number = 0
  longitude: number = 0

  constructor(private route: ActivatedRoute, private interventionsService: InterventionsService, private areaService: AreasService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getIntervention(id);
    });
    this.intervention
    this.getAllArea()
    this.getTech()
  }

  getIntervention(id: number): void {
    this.interventionsService.getInterventionById(id).subscribe({
      next: (data) => this.intervention = data[0],
      error: (err) => console.error(err),
    });
  }

  getAllArea() {
    this.areaService.getArea().subscribe(
      (area) => {
        this.areas = area
        console.log('AllArea', this.areas)
      }
    )
  }

  getTech() {
    this.addressCustomer = localStorage.getItem('addressData')
    console.log('addressCustomer', this.addressCustomer)
  }

}

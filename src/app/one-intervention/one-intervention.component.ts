import { Component, OnInit } from '@angular/core';
import { InterventionsService } from '../services/interventions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-intervention',
  templateUrl: './one-intervention.component.html',
  styleUrls: ['./one-intervention.component.scss']
})
export class OneInterventionComponent implements OnInit {

  intervention: any = null;

  constructor(private route: ActivatedRoute, private interventionsService: InterventionsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getIntervention(id);
    });
    this.intervention
  }

  getIntervention(id: number): void {
    this.interventionsService.getInterventionById(id).subscribe({
      next: (data) => this.intervention = data[0],
      error: (err) => console.error(err),
    });
  }



}

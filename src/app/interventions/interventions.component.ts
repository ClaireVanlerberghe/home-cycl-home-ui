import { Component, OnInit } from '@angular/core';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.scss']
})
export class InterventionsComponent implements OnInit {

  interventions: any[] = []

  constructor(private interventionService: InterventionsService) {

  }

  ngOnInit() {
    this.getAllInterventions()
  }

  getAllInterventions() {
    this.interventionService.getInterventions().subscribe({
      next: (data) => {
        this.interventions = data
        
      }
    })

  }


}

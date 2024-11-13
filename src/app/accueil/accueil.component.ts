import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InterventionsService } from '../services/interventions.service';
import { Intervention } from '../interfaces/intervention.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
})
export class AccueilComponent implements OnInit{

  responsiveOptions: any[] | undefined;
  maintenances: Intervention[] = [];
  reparations: Intervention[] = [];

  constructor(private interventionsService: InterventionsService) { }

  ngOnInit(): void {
    this.interventionsService.getInterventions().subscribe(
      (data: Intervention[]) => {
        this.maintenances = data.filter((maintenance: Intervention) => maintenance.id_categories === 1);
        this.reparations = data.filter((reparation: Intervention) => reparation.id_categories === 2);
      }, error => {
      console.error('Erreur lors de la récupération des interventions', error);
    });

  this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}



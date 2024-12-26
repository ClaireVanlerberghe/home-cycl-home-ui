import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Intervention } from '../interfaces/intervention.model';
import { InterventionsService } from '../services/interventions.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
})
export class AccueilComponent implements OnInit{
  interventions: any[] = []

  constructor(private interventionsService: InterventionsService, private router: Router) { }

  ngOnInit(): void {
    this.interventionsService.getInterventions().subscribe(
      (data) => {
        this.interventions = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des interventions:', error);
      }
    );
  }

  goToEntretiens() {
    this.router.navigate(['/entretiens'])
  }
  }




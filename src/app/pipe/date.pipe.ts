import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date | string | null | undefined): string {
    if (!value) return '';
    
    const date = new Date(value); // Convertir la valeur en objet Date
    if (isNaN(date.getTime())) {
      return ''; // Si ce n'est pas une date valide, retourner une chaîne vide
    }
    
    const day = date.getDate().toString().padStart(2, '0'); // Ajoute un zéro si nécessaire
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois (commence à 0)
    const year = date.getFullYear();

    return `${day}/${month}/${year}`; // Formatte la date au format jj/mm/aaaa
  }
}

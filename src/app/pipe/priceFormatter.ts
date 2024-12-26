import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter'
})
export class PriceFormatterPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '0 €';

    const price = typeof value === 'number' ? value.toFixed(2) : value;
    
    const formattedPrice = price.replace('.', ',');
    return `${formattedPrice} €`;
  }
}

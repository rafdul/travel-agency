import pricing from '../data/pricing.json';
import {parseOptionPrice} from './parseOptionPrice';

export const calculateTotal = (tripCost, options) => {
  let total = parseOptionPrice(tripCost).value;
  let multiplier = 0;
  for (let option of pricing) {
    const currentValue = options[option.id];
    if (typeof (currentValue) != 'undefined') {
      // ten if dotyczy opcji type=checkboxes w pricing.json (wartość opcji jest tablicą & w stanie jest tablica values)
      // wartość opcji jest tablicą, czyli w formularzu możliwy wybór kilku opcji
      // dlatego tu jest pętla każdy optionId z currentValue
      if (Array.isArray(currentValue) && Array.isArray(option.values)) {
        for (let optionId of currentValue) {
          const value = option.values.filter(opt => opt.id == optionId)[0];
          const price = parseOptionPrice(value.price);
          if (price.type == 'multiplier') {
            multiplier += price.value;
          }
          else if (price.type == 'number') {
            total += price.value;
          }
        }
      }
      // ten if dotyczy opcji type=dropdown i icons w pricing.json (wartość opcji nie jest tablicą, ale w stanie jest tablica values)
      // wartość opcji nie jest tablicą, czyli w formularzu możliwy tylko jeden wybór
      // dlatego tu nie ma pętli
      else if (currentValue !== '' && Array.isArray(option.values)) {
        const value = option.values.filter(opt => opt.id == currentValue)[0];
        const price = parseOptionPrice(value.price);
        if (price.type == 'multiplier') {
          multiplier += price.value;
        }
        else if (price.type == 'number') {
          total += price.value;
        }
      }
      // ten if dotyczy opcji type=number w pricing.json (wartość opcji nie jest tablicą & w stanie nie ma tablicy values)
      else if (option.type == 'number') {
        const price = parseOptionPrice(option.price);
        if (price.type == 'multiplier') {
          multiplier += price.value * currentValue;
        }
        else if (price.type == 'number') {
          total += price.value * currentValue;
        }
      }
    }
  }
  return total * multiplier;
};

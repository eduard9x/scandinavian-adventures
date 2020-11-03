import { Destination } from './destination'

import JSONData from '../data/data.json'

export class Destinations {
  featured: Destination[];
  carousel: {
    items: Destination[];
  };

  static find (id: string, isFeatured: boolean = false) {
    if(!id) {
      return;
    }
    const list: Destination[] = isFeatured ? [...JSONData.featured]
      : [...JSONData.carousel.items];
    return list.find(dest => dest.id === id);
  }
}

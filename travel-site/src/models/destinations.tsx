import { Destination } from './destination'

export interface Destinations {
  featured: Destination[];
  carousel: {
    items: Destination[];
  };
}

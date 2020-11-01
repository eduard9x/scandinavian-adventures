import { File } from './file';

export interface Destination {
  id: string;
  title: string;
  body?: string;
  media: {
    [size: string]: File;
  };
  guidedTour: boolean;
  price: {
    value: number;
    currencyCode: string;
    unit: string;
  }
}



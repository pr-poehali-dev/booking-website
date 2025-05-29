export interface SearchData {
  region: string;
  date: string;
  adults: string;
  children: string;
}

export interface BookingStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Promotion {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

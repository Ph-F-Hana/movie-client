export class Movie {
  _id?: string;
  title: string = '';
  description: string = '';
  poster: string = '';
  rating: number = 0;
  director: string = '';
  genres?: string[] = [];
  likes?: string[] = [];
}

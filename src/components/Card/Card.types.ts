export interface CardProps {
  title: string;
  id: number;
  description: string;
  poster_path?: string;
  backdrop_path?: string;
  status?: string;
  rating?: number | string;
  genres?: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

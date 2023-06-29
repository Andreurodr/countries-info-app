//Modelo de la lista de países FRONT
export interface CountryInterface {
  name: string;
  flagImage: string;
  id: string;
}
//Modelo de detalle de país FRONT
export interface CountryDetailInterface {
  name: string;
  flagImage: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  area: number; //km2
  languages: string[];
  id: string;
}

//Modelo para resultados de la API
export interface CountryApiResponseInterface {
  currencies: string[];
  languages: string[];
  area: number;
  population: number;
  subregion: string;
  region: string;
  capital: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  cca3: string;
  results: CountryDetailInterface[];
}

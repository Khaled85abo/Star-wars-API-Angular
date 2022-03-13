export interface Character {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
}

export interface Planet {
  climate?: string;
  diameter?: number;
  gravity?: number;
  orbital_period?: number;
  rotation_period?: number;
  terrain?: string;
  name?: string;
}

import { Team } from "./team.module";

export interface Driver {
  id: number;
  name: string;
  nationality: Nationality;
  birthDate: Date; // Ajusta el tipo según lo que realmente devuelva el JSON
  team: Team; // Ajusta el tipo según lo que realmente devuelva el JSON
}
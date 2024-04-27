import {InfoDivers} from "./info-divers";
import {InfoAlimentaire} from "./info-alimentaire";
import {Personne} from "./personne";

export class Enfant {
  genre: string | undefined;
  nom: string | undefined;
  prenom:string | undefined;
  dateNaissance: Date | undefined;
  infoDivers:InfoDivers[] | undefined;
  infoAlimentaire: InfoAlimentaire[] | undefined;
  parents: Personne[] | undefined;
  contacts: Personne[] | undefined;
}

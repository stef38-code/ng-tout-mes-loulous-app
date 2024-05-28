import {Personne} from "@model/personne";

export class Enfant {
  id: number | undefined;
  genre: string | undefined;
  nom: string | undefined;
  prenom:string | undefined;
  dateNaissance: Date | undefined;
  parents: Personne[] | undefined;
  fratrie: number[] | undefined;

  /*  infoDivers:InfoDivers[] | undefined;
    infoAlimentaire: InfoAlimentaire[] | undefined;
    parents: Personne[] | undefined;
    contacts: Personne[] | undefined;*/
}

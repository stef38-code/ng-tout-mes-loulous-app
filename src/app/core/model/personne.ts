import {Adresse} from "./adresse";
import {Telephone} from "./telephone";
import {Email} from "./email";

export class Personne {
  divorcer: boolean | undefined;
  genre: string | undefined;
  nom: string | undefined;
  prenom:string | undefined;
  dateNaissance: string | undefined;
  adresse: Adresse | undefined;
  telephones: Telephone[] | undefined;
  emails: Email[] | undefined;
}

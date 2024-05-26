import {Injectable} from '@angular/core';
import {Enfant} from "@model/enfant";
import {Email} from "@model/email";
import {Telephone} from "@model/telephone";
import {Adresse} from "@model/adresse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateNewEnfantService {
  new(): Observable<Enfant> {
    return new Observable(observer => {
      observer.next(this.createEnfant());
      observer.complete();
    });
  }

  constructor() {
  }

  createEnfant(): Enfant {
    return {
      "dateNaissance": undefined, "fratrie": [], "genre": "", "id": 0, "nom": "", "parents": [
        this.createPersonne(),
        this.createPersonne()], "prenom": ""
    }
  }

  private createPersonne() {
    return {
      "divorcer": false,
      "genre": '',
      "nom": '',
      "prenom": '',
      "dateNaissance": undefined,
      "adresse": this.createAdresse(),
      "telephones": [
        this.createTelephone("fixe"), this.createTelephone("portable")
      ],
      "emails": [this.createEmail("personnel"), this.createEmail("professionnel")]
    };
  }

  private createEmail(type: string): Email {
    return {"adresse": "", "type": type};
  }

  private createTelephone(type: string): Telephone {
    return {"numero": "", "type": type};
  }

  private createAdresse(): Adresse {
    return {
      "codePostal": "", "pays": "", "rue": "", "ville": ""
    };
  }
}

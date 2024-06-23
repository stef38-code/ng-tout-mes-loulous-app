import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Directive} from "@angular/core";

@Directive({
  selector: '[ValidateurLettresEspacesTirets]',
  standalone: true,
  // We add our directive to the list of existing validators
  providers: [
    {provide: NG_VALIDATORS, useExisting: ValidateurLettresEspacesTiretsDirective, multi: true}
  ]
})
export class ValidateurLettresEspacesTiretsDirective implements Validator {
  public erreur: string = "blabla";

  validate(c: FormControl): ValidationErrors | null {
    return ValidateurLettresEspacesTiretsDirective.validateLettresEspacesTirets(c);
  }

  static validateLettresEspacesTirets(control: FormControl): ValidationErrors | null {
    const regExp = /^[a-zA-Z\s-]+$/; // Expression régulière pour les lettres, espaces et tirets
    let string = control.value;
    if (string.length == 0) {
      return {'erreur': "Le champ est obligatoire !!"}
    }
    const valide = regExp.test(string);
    if (valide) {
      return null;
    } else {
      return {'erreur': "Le champ n'accepte que les éléments suivants: lettre, espace ou bien un tiret"};
    } // Retourner une erreur si la validation échoue
  }
}

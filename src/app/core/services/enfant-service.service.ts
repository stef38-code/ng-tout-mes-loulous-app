import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Enfant} from "@model/enfant";
import {catchError, Observable, of, tap} from "rxjs";
import {MessageService} from "@core/services/messages.service";


@Injectable(
)
export class EnfantService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) {
  }
  getEnfantList():Observable<Enfant[]>{
    return this.httpClient.get<Enfant[]>('api/enfants').pipe(
      tap((enfants) => this.log(`Chargement des enfants, nombre: ${enfants.length}`)),
      catchError(this.handleError<Enfant[]>('getHeroes', [])
      )
    );
  }
  getEnfantById(id: number):Observable<Enfant| undefined> {
    return this.httpClient.get<Enfant>(`api/enfants/${id}`).pipe(
      tap((enfant) => this.log(`recherche d'un enfant par id: ${id}`)),
      catchError(this.handleError<Enfant>(`getEnfantById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`Mes loulous: ${message}`);
  }

}

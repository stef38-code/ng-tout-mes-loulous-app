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

  private url = 'api/enfants';

  getEnfantList():Observable<Enfant[]>{
    return this.httpClient.get<Enfant[]>(this.url).pipe(
      tap((enfants) => this.log(`Chargement des enfants, nombre: ${enfants.length}`)),
      catchError(this.handleError<Enfant[]>('getEnfantList', [])
      )
    );
  }
  getEnfantById(id: number):Observable<Enfant| undefined> {
    return this.httpClient.get<Enfant>(`${this.url}/${id}`).pipe(
      tap((enfant) => this.log(`recherche d'un enfant${enfant.id} par id: ${id}`)),
      catchError(this.handleError<Enfant>(`getEnfantById id=${id}`))
    );
  }

  addEnfant(enfant: Enfant): Observable<Enfant> {
    return this.httpClient.post<Enfant>(this.url, enfant, this.httpOptions).pipe(
      tap((newEnfant: Enfant) => this.log(`Ajout un nouvel enfant w/ id=${newEnfant.id}`)),
      catchError(this.handleError<Enfant>('addEnfant'))
    );
  }

  deleteEnfant(id: number): Observable<Enfant> {
    const url = `${this.url}/${id}`;

    return this.httpClient.delete<Enfant>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Supprimer un enfant id=${id}`)),
      catchError(this.handleError<Enfant>('deleteEnfant'))
    );
  }

  updateEnfant(enfant: Enfant): Observable<any> {
    return this.httpClient.put(this.url, enfant, this.httpOptions).pipe(
      tap(_ => this.log(`Mise à jours d'un enfant id=${enfant.id}`)),
      catchError(this.handleError<any>('updateEnfant'))
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
    this.messageService.add(`Tout mes loulous: ${message}`);
  }

}

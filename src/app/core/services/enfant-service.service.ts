import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Enfant} from "@model/enfant";
import {catchError, lastValueFrom, Observable, of, tap, throwError} from "rxjs";

@Injectable(
)
export class EnfantService {

  constructor(private httpClient: HttpClient) {
  }
  getEnfantList():Observable<Enfant[]>{
    return this.httpClient.get<Enfant[]>('api/enfants').pipe(
      tap((enfantList) => this.log(enfantList)),
      catchError((error) => throwError(error)
      )
    );
  }

  enfantListAsPromise(): Promise<Enfant[]> {
    return lastValueFrom<Enfant[]>(this.getEnfantList());
  }
  getEnfantById(id: number):Observable<Enfant| undefined> {
    return this.httpClient.get<Enfant>(`api/enfants/${id}`).pipe(
      tap((enfant) => this.log(enfant)),
      catchError((error) => throwError(error))
    );
  }
  private log(enfantList: Enfant[]|Enfant|undefined):void {
    //console.table(enfantList);
    //
  }
  private handlerError(error: Error, errorValue: any):Observable<any>{
    console.error(error);
    return of(errorValue)
  }
}

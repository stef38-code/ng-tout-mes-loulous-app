import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Enfant} from "@model/enfant";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable(
)
export class EnfantService {

  constructor(private httpClient: HttpClient) {
  }
  getEnfantList():Observable<Enfant[]>{
    return this.httpClient.get<Enfant[]>('api/enfants').pipe(
      tap((enfantList) => this.log(enfantList)),
      catchError((error) =>this.handlerError(error,[])
      )
    );
  }

  getEnfantById(id: number):Observable<Enfant| undefined> {
    return this.httpClient.get<Enfant>(`api/enfants/${id}`).pipe(
      tap((enfant) => this.log(enfant)),
      catchError((error) =>this.handlerError(error,undefined)
      )
    );
  }
  private log(enfantList: Enfant[]|Enfant|undefined):void {
    console.table(enfantList);
  }
  private handlerError(error: Error, errorValue: any):Observable<any>{
    console.error(error);
    return of(errorValue)
  }
}

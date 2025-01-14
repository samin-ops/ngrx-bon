import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "../shared/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";
//import { environment } from "../../../environments/environment.development";

const url='https://api.realworld.io/api/users'
//const url: string = environment.apiUrl
@Injectable({
  providedIn:'root'
})

export class AuthServices{

  private http = inject(HttpClient)


constructor(){}

register(data:RegisterRequestInterface): Observable<CurrentUserInterface>{
//const url = environment.urls.users
return this.http.post<AuthResponseInterface>(`${url}`, data).pipe(map((response)=> response.user))

}

}

import { inject } from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { AuthServices } from '../services/auth.service'
import { authActions } from './actions'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { CurrentUserInterface } from '../shared/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersistenceService } from '../shared/services/persistence.service'
import { Router } from '@angular/router'

export const registerEffects = createEffect(
  (action$ = inject(Actions),authService = inject(AuthServices), persistenceService = inject(PersistenceService))=>{
  return action$.pipe(
    ofType(authActions.register),
    switchMap(({request})=>{
      return authService.register(request).pipe(
        map((currentUser: CurrentUserInterface)=>{
          persistenceService.set('token', currentUser.token) // sauver le token dans localstorage
          return authActions.registerSuccess({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse)=>{
          return of(authActions.registerFailure({
            errors:errorResponse.error.errors
          }))
        })
      )
    })
  )
}, {functional:true})

export const redirectAfterRegistrationEffect = createEffect(
  (action$=inject(Actions), router=inject(Router)) =>{
    return action$.pipe(
      ofType(authActions.registerSuccess),
      tap(()=>{
       return router.navigate(['/home'])
      })
    )

  },{functional:true, dispatch:false})

import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { authActions } from  '../../store/actions'
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { selectIsSubmitting, selectValidationErrors } from "../../store/reducers";
import { AuthServices } from "../../services/auth.service";
import { combineLatest } from "rxjs";
import { BackendErrorsMessages } from "../backendErrorsMessages/backendErrorsMessages.components";

@Component({
  selector:'SG-register',
  templateUrl:'../register/register.component.html',
  standalone:true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink, BackendErrorsMessages]
})

export class RegisterComponent{
  private store =inject( Store)
  private fb = inject(FormBuilder)

  data$ = combineLatest({
    isSubmitting:this.store.select(selectIsSubmitting),
    backendErrors:this.store.select(selectValidationErrors)

  })

  constructor(private authService:AuthServices){}


  form = this.fb.nonNullable.group({
    username:['',Validators.required ],
    email:['',Validators.required ],
    password:['',Validators.required ],
  })

  onSubmit(){
    const request:RegisterRequestInterface ={
     user: this.form.getRawValue()
    }
    this.store.dispatch(authActions.register({request}))
    this.authService.register(request).subscribe((response)=>console.log(response)
    )
  }
}

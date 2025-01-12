import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { register } from  '../store/actions'
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { selectIsSubmitting } from "../store/selectors";
import {AuthStateInterface} from '../types/authState.interface'

@Component({
  selector:'SG-register',
  templateUrl:'../components/register.component.html',
  standalone:true,
  imports:[RouterModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})

export class RegisterComponent{
  private store =inject( Store<{auth:AuthStateInterface}>)
  private fb = inject(FormBuilder)
  isSubmitting$ = this.store.select(selectIsSubmitting)


  form = this.fb.nonNullable.group({
    username:['',Validators.required ],
    email:['',Validators.required ],
    password:['',Validators.required ],
  })

  onSubmit(){
    const request:RegisterRequestInterface ={
     user: this.form.getRawValue()
    }
    this.store.dispatch(register({request}))
  }
}

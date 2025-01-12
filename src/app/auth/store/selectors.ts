import { createSelector } from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'

export const selectorFeature = (state:{auth: AuthStateInterface})=>state.auth

export const selectIsSubmitting = createSelector(
selectorFeature, (state)=> state.isSubmitting
)

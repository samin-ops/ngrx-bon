import { CurrentUserInterface } from "../shared/currentUser.interface";
import { BackendErrorsInterface } from "./backendErrors.interface";

export interface AuthStateInterface{
isSubmitting:boolean,
currenUser: CurrentUserInterface|null|undefined,
isloading: boolean,
validationErrors: BackendErrorsInterface|null
}

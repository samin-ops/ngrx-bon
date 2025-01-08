import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-compotent-button',
  standalone: true,
  imports: [],
  templateUrl: './compotent-button.component.html',
  styleUrl: './compotent-button.component.scss'
})
export class CompotentButtonComponent {

  constructor( private store: Store<{counter:{counter:number}}>){}


  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }

}

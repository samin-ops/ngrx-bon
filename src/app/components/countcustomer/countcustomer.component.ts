import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customerIncrement } from '../../shared/store/counter.actions';

@Component({
  selector: 'app-countcustomer',
  standalone: true,
  imports: [],
  templateUrl: './countcustomer.component.html',
  styleUrl: './countcustomer.component.scss'
})
export class CountcustomerComponent {

constructor(private store: Store<{counter:{counter:number}}>){}

 customerIncrement!:number
  onCustomerIncrement(){
    this.store.dispatch(customerIncrement({value:this.customerIncrement}))
  }


}

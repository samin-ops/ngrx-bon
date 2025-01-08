import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-compotent-display',
  standalone: true,
  imports: [],
  templateUrl: './compotent-display.component.html',
  styleUrl: './compotent-display.component.scss'
})
export class CompotentDisplayComponent implements OnInit {

  constructor(private store: Store<{counter:{counter:number}}>){

  }

counterDisplay! : number
  ngOnInit(): void {
      this.store.select('counter').subscribe((data)=>{
     this.counterDisplay=data.counter
     console.log(this.counterDisplay);

      })
  }

}

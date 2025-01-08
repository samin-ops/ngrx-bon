import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CompotentButtonComponent } from "./components/compotent-button/compotent-button.component";
import { CompotentDisplayComponent } from "./components/compotent-display/compotent-display.component";
import { CountcustomerComponent } from "./components/countcustomer/countcustomer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, CompotentButtonComponent, CompotentDisplayComponent,CountcustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'starter';
}

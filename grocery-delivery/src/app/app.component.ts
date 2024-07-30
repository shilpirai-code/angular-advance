import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery-delivery';
}

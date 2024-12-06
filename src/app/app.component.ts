import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AppModule } from './app.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'composant de natition en etoiles';
  userRating: number = 3; 

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0; 
  @Input() maxStars: number = 5; 
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = [];

  ngOnInit(): void {
    this.updateStarsArray();
  }

  updateStarsArray(): void {
    this.stars = Array.from({ length: this.maxStars }, (_, index) => index < this.rating);
  }

  setRating(index: number): void {
    this.rating = index + 1; // L'indice commence à 0 donc on ajoute 1
    this.updateStarsArray();
    this.ratingChange.emit(this.rating); // Transmet la nouvelle note au composant parent
  }
}

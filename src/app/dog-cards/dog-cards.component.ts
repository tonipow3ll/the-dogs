import { Component, OnInit } from '@angular/core';
import { dogs } from '../../config/dogs';
@Component({
  selector: 'app-dog-cards',
  templateUrl: './dog-cards.component.html',
  styleUrls: ['./dog-cards.component.scss']
})
export class DogCardsComponent implements OnInit {
  constructor(
    // public dogs: dogs
    // service call here
  ) { }

  public dogs = dogs;

  ngOnInit(): void {
    // make api call, add loading fallback
  }
}

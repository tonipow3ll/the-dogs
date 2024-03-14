import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dogs } from 'src/config/dogs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private route: ActivatedRoute){}

  public id: string | null = this.route.snapshot.paramMap.get('id');
  public currentDog: any = null;

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.currentDog = dogs.filter(({ age }) => age === this.id);

  }
}

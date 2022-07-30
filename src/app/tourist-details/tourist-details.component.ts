import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-tourist-details',
  templateUrl: './tourist-details.component.html',
  styleUrls: ['./tourist-details.component.css']
})
export class TouristDetailsComponent implements OnInit {

  id: number
  tourist: Tourist

  constructor(private route: ActivatedRoute, private touristService: TouristService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tourist = new Tourist();
    this.touristService.getTouristById(this.id).subscribe( data => {
      this.tourist = data;
    });
  
 

  }

}

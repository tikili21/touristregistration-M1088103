import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';


@Component({
  selector: 'app-update-tourist',
  templateUrl: './update-tourist.component.html',
  styleUrls: ['./update-tourist.component.css']
})
export class UpdateTouristComponent implements OnInit {
  id: number;
  tourist: Tourist = new Tourist(); 

  constructor(private touristService: TouristService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.touristService.getTouristById(this.id).subscribe(data => {
      this.tourist = data
    }, error => console.log(error));
  }

  onSubmit(){
    this.touristService.updateTourist(this.id, this.tourist).subscribe(data => {
      this.goToTouristList();
    }, error => console.log(error));
  }

  goToTouristList(){
    this.router.navigate(['/tourists']);
  }

  

  

}

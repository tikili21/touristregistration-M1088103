import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tourist } from '../tourist'
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-tourist-list',
  templateUrl: './tourist-list.component.html',
  styleUrls: ['./tourist-list.component.css']
})
export class TouristListComponent implements OnInit {

  tourists: Tourist[];

  constructor(private touristService: TouristService,
    private router: Router) { }

  ngOnInit(): void {
    this.tourists = [{
      "id": 1,
      "FirstName": "Preeti",
      "LastName" : "Mahapatra",
      "Gender" : "Female",
      "age"  : 20,
      "FromPlace": "Berhumpur",
      "NumberOfDays" : 6,},
      {"id":2,
      "age":22,
      "FirstName":"Raju",
      "Gender":"male",
      "LastName":"patra",
      "FromPlace":"Bijayapur",
      "NumberOfDays":4},
      {"id":3,
      "age":27,
      "FirstName":"Padmini",
      "Gender":"female",
      "LastName":"Roy",
      "FromPlace":"Bhubaneswar",
      "NumberOfDays":21},
      {"id":4,
      "age":24,
      "FirstName":"Layatmika",
      "Gender":"female",
      "LastName":"Nayak",
      "FromPlace":"Bhubaneswar",
      "NumberOfDays":9},
      {"id":5,
      "age":34,
      "FirstName":"Palavi",
      "Gender":"female",
      "LastName":"Sahu",
      "FromPlace":"Khordha",
      "NumberOfDays":7},
      {"id":6,
      "age":56,
      "FirstName":"Simran",
      "Gender":"female",
      "LastName":"Barik",
      "FromPlace":"Chatrapur",
      "NumberOfDays":3},
      {"id":7,
      "FirstName":"Shiva",
      "LastName":"Nayak",
      "Gender":"male",
      "age":28,
      "FromPlace":"Baleswar",
      "NumberOfDays":8
    }];
    this.getTourists();  
  }

  private getTourists(){
    this.touristService.getTouristsList().subscribe(data => {
      this.tourists = data;
    });
  }
  public touristlist(){
    console.log(this.tourists)
    this.touristService.getTouristsList().subscribe(data => {
      alert("successfully Tourist is registered")
    },error => alert("sorry tourist is not registered"));
  }

  touristDetails(id: number){
    this.router.navigate(['tourist-details', id]);
  }

  updateTourist(id:number){
    this.router.navigate(['update-tourist', id]);
  }
  

}

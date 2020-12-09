import { Component, Input, OnInit } from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent implements OnInit {
  id:number;
  @Input() select : Cours ;
  constructor(private service : CoursService,private ServiceRoute: ActivatedRoute) {
    
    this.ServiceRoute.queryParams.subscribe(params => { this.id = params['id']; });
   }

  ngOnInit(): void {
    this.id = this.ServiceRoute.snapshot.params.id;
    this.service.searchCours(this.id).subscribe(
      (select: Cours) => this.select = select
    );
  }
  edit(){
    this.service.putCours(this.select).subscribe(
      ()=> console.log(this.select)
    );
  }

}

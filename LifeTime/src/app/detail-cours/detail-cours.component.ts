import { Component, OnInit } from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit
{

  listCours : Cours[];
  id:number;
  select : Cours ;
  constructor(private service : CoursService,private ServiceRoute: ActivatedRoute) 
  {
      this.ServiceRoute.queryParams.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void 
  {
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
    this.id = this.ServiceRoute.snapshot.params.id;
    
  }
}

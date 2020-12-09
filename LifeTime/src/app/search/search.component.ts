import { Component, OnInit, Input } from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : CoursService,private ServiceRoute: ActivatedRoute) {
    this.ServiceRoute.queryParams.subscribe(params => { this.id = params['id']; });
   }
  listCours : Cours[];
  id:number;
  select : Cours ;
  @Input() recherche:string;
  ngOnInit(): void {
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
    this.id = this.ServiceRoute.snapshot.params.id;
    
  }

}

import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  listCours : Cours[];
  p: number[] = [];
  i : number ;
  id : number ;
  constructor(private service : CoursService) { }

  ngOnInit(): void {
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
  }

}

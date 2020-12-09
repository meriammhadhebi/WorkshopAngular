import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-allcours',
  templateUrl: './allcours.component.html',
  styleUrls: ['./allcours.component.css']
})
export class AllcoursComponent implements OnInit {

  listCours : Cours[];
  constructor(private service : CoursService) { }

  ngOnInit(): void {
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
  }

}
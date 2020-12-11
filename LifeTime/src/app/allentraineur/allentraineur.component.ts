import { Component, OnInit } from '@angular/core';
import { entraineur } from '../model/entraineur';
import { EntraineurService } from '../services/entraineur.service';

@Component({
  selector: 'app-allentraineur',
  templateUrl: './allentraineur.component.html',
  styleUrls: ['./allentraineur.component.css']
})
export class AllentraineurComponent implements OnInit {

  listeentraineur:entraineur[];

  constructor(private service : EntraineurService) { }

  ngOnInit(): void {
    this.service.getentraineur().subscribe(
      (data: entraineur[]) => this.listeentraineur = data
    );
  }
  delete(id) 
  {
    this.service.deleteentraineur(id).subscribe(
      () => this.listeentraineur = this.listeentraineur.filter(entraineur => entraineur.id != id)
    );
  }

}

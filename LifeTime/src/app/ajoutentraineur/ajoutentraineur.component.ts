import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { entraineur } from '../model/entraineur';
import { EntraineurService } from '../services/entraineur.service';

@Component({
  selector: 'app-ajoutentraineur',
  templateUrl: './ajoutentraineur.component.html',
  styleUrls: ['./ajoutentraineur.component.css']
})
export class AjoutentraineurComponent implements OnInit {

  id:number;
  val:string;
  @Input() select : entraineur ;
  entraineur : entraineur;
  listEntraineur : entraineur[];
  constructor(private service : EntraineurService,private ServiceRoute: ActivatedRoute) {
    
    this.ServiceRoute.queryParams.subscribe(params => { this.val = params['val']; });
    this.ServiceRoute.queryParams.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.select=new entraineur()
    this.val = this.ServiceRoute.snapshot.params.val;
    this.id = this.ServiceRoute.snapshot.params.id;
    this.service.searchentraineur(this.id).subscribe(
      (select: entraineur) => this.select = select
    );
    this.service.getentraineur().subscribe(
      (data: entraineur[]) => this.listEntraineur = data
    );
  }
  save(){
    if (this.val === 'edit')
    {
    this.service.putentraineur(this.select).subscribe(
      ()=> console.log(this.select)
    );
    }
    else
    {
      this.service.addentraineur(this.select).subscribe(
        () => this.listEntraineur = [this.select, ...this.listEntraineur]
      );
    }
  }


}

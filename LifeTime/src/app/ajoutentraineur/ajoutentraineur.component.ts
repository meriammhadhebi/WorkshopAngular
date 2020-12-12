import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { entraineur } from '../model/entraineur';
import { EntraineurService } from '../services/entraineur.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  constructor(private service : EntraineurService,private ServiceRoute: ActivatedRoute,private sanitizer:DomSanitizer) {
    
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
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl("assets/images/" + imageUrl.substring(12));
  }


}

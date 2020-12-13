import { Component, Input, OnInit } from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntraineurService } from '../services/entraineur.service';
import { entraineur } from '../model/entraineur';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent implements OnInit {
  id:number;
  val:string;
  @Input() select : Cours ;
  cours : Cours;
  listCours : Cours[];
  registerForm : FormGroup;
  listentraineur : entraineur[];
  listintensite: any = ['Hard', 'Medium', 'Easy'];
  

  constructor(private service : CoursService,private ServiceRoute: ActivatedRoute,private serviceentraineur:EntraineurService,private sanitizer:DomSanitizer,private router:Router) {
    
    this.ServiceRoute.queryParams.subscribe(params => { this.val = params['val']; });
    this.ServiceRoute.queryParams.subscribe(params => { this.id = params['id']; });
   }

  ngOnInit(): void {
    this.select=new Cours()
    this.val = this.ServiceRoute.snapshot.params.val;
    this.id = this.ServiceRoute.snapshot.params.id;
    this.serviceentraineur.getentraineur().subscribe(
      (data: entraineur[]) => this.listentraineur = data
    );
    this.registerForm = new FormGroup({
      nom : new FormControl('',[Validators.required]),
      Duree :new FormControl('',[Validators.required]),
      Description : new FormControl('',[Validators.required]),
      capacite : new FormControl('',[Validators.required,Validators.min(0)]),
      Intensite : new FormControl('',[Validators.required]),
      Materiel : new FormControl('',[Validators.required]),
      Frequence : new FormControl('',[Validators.required]),
      grpMusculaire : new FormControl('',[Validators.required]),
      Audiance : new FormControl('',[Validators.required]),
      img : new FormControl(''),
      tenue : new FormControl('',[Validators.required]),
      entraineur : new FormControl('',[Validators.required]),
    });
    this.service.searchCours(this.id).subscribe(
      (select: Cours) => this.select = select
    );
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
  }

  get nom(){return this.registerForm.get('nom');}
  get Duree(){return this.registerForm.get('Duree');}
  get Description(){return this.registerForm.get('Description');}
  get capacite(){return this.registerForm.get('capacite');}
  get Intensite(){return this.registerForm.get('Intensite');}
  get Materiel(){return this.registerForm.get('Materiel');}
  get Frequence(){return this.registerForm.get('Frequence');}
  get grpMusculaire(){return this.registerForm.get('grpMusculaire');}
  get Audiance(){return this.registerForm.get('Audiance');}
  get img(){return this.registerForm.get('img');}
  get tenue(){return this.registerForm.get('tenue');}
  get entraineur(){return this.registerForm.get('entraineur');}
  get form(){return this.registerForm;}

  save(){
    if (this.val === 'Edit')
    {
    this.service.putCours(this.select).subscribe(
      ()=> console.log(this.select)
    );
    }
    else(this.val === 'Add')
    {
      this.service.addCours(this.registerForm.value).subscribe(
        () => this.listCours = [this.registerForm.value, ...this.listCours]
      );
    }
    this.router.navigateByUrl('/allcours');
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl( "assets/images/"+imageUrl.substring(12));
  }
  

}

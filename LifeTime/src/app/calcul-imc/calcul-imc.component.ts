import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcul-imc',
  templateUrl: './calcul-imc.component.html',
  styleUrls: ['./calcul-imc.component.css']
})
export class CalculIMCComponent implements OnInit {

  @Output() notif = new EventEmitter<number>();
  IMC=0;
  registerForm : FormGroup;
  @Input() taille : number ;
  @Input() poids : number ;
  @Input() age : number ;
  @Input() gender : string ;
  msg : string;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      Taille : new FormControl('',[Validators.required]),
      Poids : new FormControl('',[Validators.required]),
      Age : new FormControl('',[Validators.required]),
      sexe : new FormControl('',[Validators.required]),
    });
  }
  get Taille(){return this.registerForm.get('Taille');}
  get Poids(){return this.registerForm.get('Poids');}
  get Age(){return this.registerForm.get('Age');}
  get sexe(){return this.registerForm.get('sexe');}
  get form(){return this.registerForm;}
  sendNotif(){
    this.IMC = this.registerForm.value.Poids/((this.registerForm.value.Taille*0.01)*(this.registerForm.value.Taille*0.01));
    this.IMC=Math.round(this.IMC);
    this.notif.emit(this.IMC);
  }
  getColor()
  {
      if (this.IMC <=18.5)
      {
      this.msg="Vous avez besoin de forger votre masse musculaire pour atteindre une IMC entre 18 et 25. Pour une prise de masse efficace, consultez notre nutritionniste.";
      return 'blue';
      }
      else if (this.IMC <24.9 && this.IMC>18.5)
      {
        this.msg="Vous avez des mesures idéales, pour maintenir votre forme, continuez à manger équilibré et à faire de l’exercice régulièrement.";
      return 'indigo';  
      }
      else if (this.IMC <29.9 && this.IMC>24.9)
      {
        this.msg="Vous avez quelques kilos en plus, il vous faut une activité sportive pour atteindre une IMC entre 18 et 25. Vous pouvez consulter notre nutritionniste, elle vous accompagnera pour perdre du poids de manière saine et durable.";
      return 'yellow';  
      }
      else if (this.IMC <40 && this.IMC>29.9)
      {
        this.msg="Vous avez quelques kilos en plus, il vous faut une activité sportive pour atteindre une IMC entre 18 et 25. Vous pouvez consulter notre nutritionniste, elle vous accompagnera pour perdre du poids de manière saine et durable.";
      return 'orange';  
      }
      else if (this.IMC>40)
      {
        this.msg="Vous avez quelques kilos en plus, il vous faut une activité sportive pour atteindre une IMC entre 18 et 25. Vous pouvez consulter notre nutritionniste, elle vous accompagnera pour perdre du poids de manière saine et durable.";
      return 'red';  
      }
  }

}

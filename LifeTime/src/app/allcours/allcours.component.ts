import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Cours } from '../model/cours';
import { CoursService } from '../services/cours.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-allcours',
  templateUrl: './allcours.component.html',
  styleUrls: ['./allcours.component.css']
})
export class AllcoursComponent implements OnInit {

  listCours : Cours[];
  search : string;
  constructor(private service : CoursService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.service.getCours().subscribe(
      (data: Cours[]) => this.listCours = data
    );
  }
  delete(id) {
    this.service.deleteCours(id).subscribe(
      () => this.listCours = this.listCours.filter(cours => cours.id != id)
    );

  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl("assets/images/" + imageUrl.substring(12));
  }

}

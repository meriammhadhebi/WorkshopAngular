import { Component, OnInit } from '@angular/core';
import { entraineur } from '../model/entraineur';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EntraineurService } from '../services/entraineur.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,private service: EntraineurService) { }
  listentraineur: entraineur[];
  ngOnInit(): void {
    this.service.getentraineur().subscribe(
      (data: entraineur[]) => this.listentraineur = data
    );
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl("assets/images/" + imageUrl.substring(12));
  }
}

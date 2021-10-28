import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {
  text: string;
  clean: boolean;
  languages: any[];
  constructor(private dandelionService: DandelionService) {
    this.text = "";
    this.clean = false;
    this.languages = [];
  }

  ngOnInit(): void {
  }

  detectLanguage() {
    this.dandelionService.detectLanguage(this.text, this.clean).subscribe((data: any) => {
      this.languages=data.detectedLangs;
    })
  }

}

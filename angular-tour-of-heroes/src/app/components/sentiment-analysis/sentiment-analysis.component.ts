import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {
  text:string;
  lang:string;
  constructor(private dandelionService: DandelionService) { 
    this.text="";
    this.lang="auto";
  }

  ngOnInit(): void {
    
  }

  sentimentAnalysis() {
    this.dandelionService.sentimentAnalysis(this.text,this.lang).subscribe((data: any) => {console.log(data)});
  }

}

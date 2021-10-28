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
  type:string="";
  green:number;
  red:number;

  constructor(private dandelionService: DandelionService) { 
    this.text="";
    this.lang="auto";
    this.green=255;
    this.red=255;
  }

  ngOnInit(): void {
    
  }

  sentimentAnalysis() {
    this.dandelionService.sentimentAnalysis(this.text,this.lang).subscribe((data: any) => {
      const score=this.normalizeRange(data.sentiment.score);
      this.red=255*(1-score);
      this.green=255*score;
      this.type=data.sentiment.type;
    });
  
  }
  getColorString() {
    const color:string=`rgb(${this.red},${this.green},0)`;
    console.log(color);
    return color;
  }
  private normalizeRange(x:any):number{
    return (x + 1) / 2;
  } 
 

}

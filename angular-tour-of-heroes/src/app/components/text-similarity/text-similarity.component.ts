import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;
  similarity:any;
  constructor(private dandelionService: DandelionService) {
    this.text1 = '';
    this.text2 = '';
    this.similarity=0;
  }

  ngOnInit(): void {
  }

  checkTextSimilarities() {
    console.log("ovo je text 1");
    console.log(this.text1);
    console.log("ovo je text 2");
    console.log(this.text2);
    this.dandelionService.checkTextSimilarities(this.text1, this.text2).subscribe((data:any) => {
        console.log("ovo je text similarity");
        this.similarity=data.similarity;
    });
  }
}

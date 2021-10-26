import { Component, OnInit } from '@angular/core';
import { DandelionService } from 'src/app/services/dandelion.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css'],
})
export class EntityExtractionComponent implements OnInit {
  checks: boolean[];
  checkNames: string[];
  keys:number[];
  text: string;
  arr: any[];
  constructor(private dandelionService: DandelionService) {
    this.checks = [false, false, false];
    this.checkNames = ['image', 'abstract', 'categories'];
    this.keys=[0,1,2];
    this.text = '';
    this.arr = [];
  }
  ngOnInit(): void {}
  extractEntities() {
    const include: string = this.keys.filter((index: number) => this.checks[index]).map((index:number) => this.checkNames[index]).join(',');
    this.dandelionService.extractEntities(this.text, include).subscribe((data: any) => {this.arr = data.annotations;});
  }
}

import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  records: string[];
  constructor(private historyService: HistoryService) {
    this.records = [];
  }

  ngOnInit(): void {
    this.records = this.historyService.getRecordsOfApiCalls();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  api: string[];
  constructor() {
    this.api = [];
  }
  recordApiCall(url:string) {
    const data = new Date().toJSON("yyyy/MM/dd HH:mm");
    const history = `${data} ${url}`;
    this.api.push(history);
  }
  getRecordsOfApiCalls(){
    return this.api;
  }
}

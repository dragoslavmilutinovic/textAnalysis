import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly textSimilarityUrl: string = environment.textSimilarityUrl;
  private readonly entityExtractionUrl: string = environment.entityExtractionUrl;
  private readonly langDetectionUrl: string = environment.langDetectionUrl;
  private readonly sentimentAnalysisUrl: string = environment.sentimentAnalysis;
  private token: string = "";
  constructor(private httpClient: HttpClient, private historyService: HistoryService) {
  }

  checkTextSimilarities(text1: string, text2: string) {
    const params= {
      text1: text1,
      text2: text2,
      token: this.token,
    }
    this.historyService.recordApiCall(this.createApiCall(this.textSimilarityUrl,params));
    this.setToken();
    return this.httpClient.get(this.textSimilarityUrl, {
      params,
    })
  }

  detectLanguage(text: string, clean: boolean) {
    const params= {
      text: text,
      token: this.token,
      clean: clean,
    }
    this.historyService.recordApiCall(this.createApiCall(this.langDetectionUrl,params));
    this.setToken();
    return this.httpClient.get(this.langDetectionUrl, {
       params,
    })
  }

  extractEntities(text: string, include: string) {
    const params= {
      text: text,
      token: this.token,
      include: include,
    }
    this.historyService.recordApiCall(this.createApiCall(this.entityExtractionUrl,params));
    this.setToken();
    return this.httpClient.get(this.entityExtractionUrl, {
      params,
    })
  }
  sentimentAnalysis(text: string, lang: string) {
    const params = {
      lang: lang,
      text: text,
      token: this.token,
    }
    this.historyService.recordApiCall(this.createApiCall(this.sentimentAnalysisUrl,params));
    this.setToken();
    return this.httpClient.get(this.sentimentAnalysisUrl, {
      params,
    })
   

  }
  setToken() {
    const userToken=window.localStorage.getItem('token');
    this.token=(userToken!==null)?userToken:this.token;
    console.log(this.token);
  }

  createApiCall(url:string,params:any):string{
    var esc = encodeURIComponent;
    var query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
    console.log(query);
    return `${url}?${query}`;
  }



}

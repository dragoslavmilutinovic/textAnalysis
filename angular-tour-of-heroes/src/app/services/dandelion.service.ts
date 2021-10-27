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
  private readonly token:string = 'bb24090143524e35b78bcbfe29014d95'
  constructor(private httpClient: HttpClient,private historyService:HistoryService) { }

  checkTextSimilarities(text1: string, text2: string) {
    this.historyService.recordApiCall(this.textSimilarityUrl);
    return this.httpClient.get(this.textSimilarityUrl, {
      params: {
        text1: text1,
        text2: text2,
        token: this.token,
      }
    })
  }

  detectLanguage(text: string, clean: boolean) {
    this.historyService.recordApiCall(this.langDetectionUrl);
    return this.httpClient.get(this.langDetectionUrl, {
      params: {
        text: text,
        token: this.token,
        clean: clean,
      }
    })
  }

  extractEntities(text: string,include:string) {
    this.historyService.recordApiCall(this.entityExtractionUrl);
    return this.httpClient.get(this.entityExtractionUrl, {
      params: {
        lang: 'en',
        text: text,
        token: this.token,
        include: include,
      }
    })
  }
  sentimentAnalysis(text:string,lang:string){
    this.historyService.recordApiCall(this.sentimentAnalysisUrl);
    return this.httpClient.get(this.sentimentAnalysisUrl, {
      params: {
        lang: lang,
        text: text,
        token: this.token,
      }
    })

  }



}

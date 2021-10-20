import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DandelionService {

  private readonly textSimilarityUrl: string = environment.textSimilarityUrl;
  private readonly entityExtractionUrl: string = environment.entityExtractionUrl;
  private readonly langDetectionUrl: string = environment.langDetectionUrl;
  private readonly sentimentAnalysis: string = environment.sentimentAnalysis;
  private readonly token:string = '610b33c56a2a43ff8b21ceb5aa588e63'
  constructor(private httpClient: HttpClient) { }

  checkTextSimilarities(text1: string, text2: string) {
    console.log("ovo je text1 na servisu");
    console.log(text1);
    console.log("ovo je text2 na servisu");
    console.log(text2);
    return this.httpClient.get(this.textSimilarityUrl, {
      params: {
        text1: text1,
        text2: text2,
        token: this.token,
      }
    })
  }

  detectLanguage(text: string, clean: boolean) {
    return this.httpClient.post(this.langDetectionUrl, {
      params: {
        text: text,
        token: this.token,
        clean: clean,
      }
    })
  }

  extractEntities(text: string) {
    return this.httpClient.post(this.entityExtractionUrl, {
      params: {
        lang: 'en',
        text: text,
        token: this.token,
        include: 'abstract, image'
      }
    })
  }


}

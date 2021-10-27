import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './activations/token.guard';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent} from './components/home/home.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate:[TokenGuard]

  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate:[TokenGuard]

  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate:[TokenGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate:[TokenGuard]

  },
  {
    path: "history-analysis",
    component: HistoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { HomeComponent} from './components/home/home.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

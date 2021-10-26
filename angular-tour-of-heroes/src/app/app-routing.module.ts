import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateToken } from './activations/can.activate';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
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
    canActivate: [CanActivateToken]
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [CanActivateToken]
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [CanActivateToken]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [CanActivateToken]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

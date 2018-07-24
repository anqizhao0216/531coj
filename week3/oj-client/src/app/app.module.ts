import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { CollaborationService } from './services/collaboration.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  },
  {
    provide: "collaboration",
    useClass: CollaborationService
  },
  AuthService,
  AuthGuardService
],
  bootstrap: [AppComponent]
})
export class AppModule { }

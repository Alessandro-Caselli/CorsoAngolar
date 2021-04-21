import { TitleCaseComponent } from './title-case/title-case.component';
import { AuthorsService } from './authors/authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    SummaryPipe,
    PanelComponent,
    TitleCaseComponent,
    PanelComponent,
    LikeComponent,
    ContactFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

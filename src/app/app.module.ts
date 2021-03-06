import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { TitleCaseComponent } from './title-case/title-case.component';
import { AuthorsService } from './authors/authors.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PasswordComponent } from './password/password.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';

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
    CourseFormComponent,
    SignupFormComponent,
    PasswordComponent,
    PostsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

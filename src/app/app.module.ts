import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataComponent } from './data/data.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PostFilterPipe } from './post-filter.pipe';
import { TagComponent } from './tag/tag.component';
import { FormsModule } from '@angular/forms';
import { TestServiceService } from './test-service.service';
import { PostPrevComponent } from './post-prev/post-prev.component';
import { ButtonDirective } from './button.directive';
import { PostComponent } from './post/post.component';
import { AuthorComponent } from './author/author.component';
import { PostTitlePipe } from './post-title.pipe';
import { NextComponent } from './next/next.component';
import { PreviousComponent } from './previous/previous.component';
import { AdminPrevComponent } from './admin-prev/admin-prev.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { MarkdownToHtmlModule, MarkdownToHtmlPipe } from 'markdown-to-html-pipe';



const appRoutes: Routes = [
  { path: 'posts/:page', component: MainComponent},
  { path: 'posts', component: MainComponent },

  { path: 'post/:postTitle', component: PostComponent },
  { path: 'admin/edit/:post', component: PostEditorComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo:'posts', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    SidebarComponent,
    DataComponent,
    AdminComponent,
    PostFilterPipe,
    TagComponent,
    PostPrevComponent,
    ButtonDirective,
    PostComponent,
    AuthorComponent,
    PostTitlePipe,
    NextComponent,
    PreviousComponent,
    AdminPrevComponent,
    PostEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    MarkdownToHtmlModule,
    //MarkdownToHtmlPipe
  ],
  providers: [TestServiceService, PostTitlePipe, MarkdownToHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

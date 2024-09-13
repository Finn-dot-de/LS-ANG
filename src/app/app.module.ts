import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {FooterComponent} from "./Components/Main-Components/footer/footer.component";
import {HeaderComponent} from "./Components/Main-Components/header/header.component";
import {QuizbereichComponent} from "./Components/Main-Components/quizbereich/quizbereich.component";
import {PageEditorComponent} from "./Components/sites/page-editor/page-editor.component";
import {QuillModule} from "ngx-quill";

@NgModule({
  declarations: [
        AppComponent,
    ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    QuizbereichComponent, PageEditorComponent,
    QuillModule.forRoot()
  ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class AppModule { }

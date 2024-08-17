import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./Components/Main-Components/footer/footer.component";
import { LoginComponent } from "./Components/Sub-Components/login/login.component";
import { HeaderComponent } from "./Components/Main-Components/header/header.component";
import {QuizbereichComponent} from "./Components/Main-Components/quizbereich/quizbereich.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        QuizbereichComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

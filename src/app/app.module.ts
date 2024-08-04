import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/maincomponents/footer/footer.component';
import { HeaderComponent } from './Components/maincomponents/header/header.component';
import { LoginComponent } from './Components/Subcomponents/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizbereichComponent } from './Components/maincomponents/quizbereich/quizbereich.component';

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

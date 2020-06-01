import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShareJokeDialog } from './joke-list/share-joke.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    ShareJokeDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [ShareJokeDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

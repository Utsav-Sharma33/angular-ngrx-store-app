import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './app/store/counter/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      counter: counterReducer,
    }),
  ],
});

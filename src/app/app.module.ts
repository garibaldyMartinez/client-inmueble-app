import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

  import { AngularFireModule } from '@angular/fire/compat';
  import { AngularFireStorageModule } from '@angular/fire/compat/storage';
  import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
  import { AngularFireAuthModule } from '@angular/fire/compat/auth';

  import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
  import { getFirestore, provideFirestore } from '@angular/fire/firestore';
  import { getAuth, provideAuth } from '@angular/fire/auth';
  import { getStorage, provideStorage } from '@angular/fire/storage';

import { environment } from '@src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(()=> initializeApp(environment.firabase.config)),
    provideFirestore(()=> getFirestore()),
    provideStorage(()=> getStorage()),
    provideAuth(()=> getAuth()),

    AngularFireModule.initializeApp(environment.firabase.config),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

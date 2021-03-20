import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { UploadComponent } from './upload.component';
import { UploadInterceptor } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, UploadsModule, BrowserAnimationsModule],
    declarations: [AppComponent, UploadComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: UploadInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}

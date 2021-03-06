// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent } from './components';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserComponent } from './components/pages/user/user.component';
import { GrandprixComponent } from './components/pages/grandprix/grandprix.component';
import { TicketComponent } from './components/pages/ticket/ticket.component';
import { CommentComponent} from './components/pages/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    GrandprixComponent,
    TicketComponent,
    CommentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    DialogModule,
    ButtonModule,
    ChartModule
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ExponentialStrengthPipe } from 'src/pipes/custom.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from './shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserpageComponent } from './userpage/userpage.component';
import { canActivateDemo } from 'src/router-guards/canActivate';
import { canDeActivateDemo } from 'src/router-guards/canDeActive';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MaterialModule} from './material.module'
import {DataService} from './data/data.service'; 
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    UserpageComponent,
    HomepageComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [canActivateDemo, canDeActivateDemo,DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

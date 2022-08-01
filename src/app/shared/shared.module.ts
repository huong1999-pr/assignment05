import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ItemsharedComponent } from '../itemshared/itemshared.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 
@NgModule({
  declarations: [ ItemsharedComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'item-shared',
        pathMatch: 'full',
      },
      {
        path: 'item-shared',
        component: ItemsharedComponent,
      },
    ]),
  ],
  exports: [ ],
})
export class SharedModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserData {
  id: string;
  userId: string;
  title: any;
  body: any;
}

@Component({
  selector: 'app-itemshared',
  templateUrl: './itemshared.component.html',
  styleUrls: ['./itemshared.component.scss'],
})
export class ItemsharedComponent implements OnInit {
  toggle = true;
  status = 'Enable'; 
  btnStyle = 'initial';
  heroStyle = 'none';
   
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  private baseURL = 'https://jsonplaceholder.typicode.com/posts';
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private router: Router, private dataService: DataService, private http: HttpClient) {
    // this.getData().subscribe((data) => {
    //   console.log(data);
    //   this.posts = data;
    //   this.dataSource = new MatTableDataSource(this.posts);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
    this.dataService.getDataFromAPI().subscribe((data) => {
      console.log(data);
      this.posts = data;
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getData() {
    return this.http.get(this.baseURL);
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  onShowHiddenItem() {
    if (this.btnStyle == 'initial') {
      this.btnStyle = 'none';
    }
    else {
      this.btnStyle = 'initial';
    }
  }
  data: any = {};
  ngOnInit(): void {
    // console.log(this.demoService.students);
    // console.log('this.demoService.students');
    // this.demoService.getDataFromAPI().subscribe((val) => {
    //   this.data = val;
    // });
  }

  gotoHomepage() {
    this.router.navigateByUrl('');
  }
}
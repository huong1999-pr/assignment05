import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/services/demo.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private demoService: DemoService,
    private dataService: DataService
  ) {}

  email = '';
  student: any = {};
  post: any = {};
  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.params['email'];
    this.student = this.demoService.students.find(
      (i: any) => i.email === this.email
    );
    this.post = this.dataService.ELEMENT_DATA.find(
      (i: any) => i.position === Number(this.email)
    );
   
    console.log(this.email );
     
    console.log(this.dataService.ELEMENT_DATA );
    console.log(this.demoService.students );
    console.log(this.post );
    console.log(this.post.title );
    
  }
}

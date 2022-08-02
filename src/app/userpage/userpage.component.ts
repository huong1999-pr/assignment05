import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DemoService } from "src/services/demo.service";
import { Post } from "../Post";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DataSource } from "@angular/cdk/table";
import { DataService } from "../data/data.service";
@Component({
  selector: "app-userpage",
  templateUrl: "./userpage.component.html",
  styleUrls: ["./userpage.component.scss"],
})
export class UserpageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private demoService: DemoService,
    private dataService: DataService
  ) {}
  students: any = [];
  contacts: any;
  selectedContact: any;
  ngOnInit(): void {
    this.students = this.demoService.students;
    // this.contacts = this.dataService.getContacts();
  }
  displayedColumns = ["date_posted", "title", "category", "delete"];
  dataSource = new PostDataSource(this.dataService);
  gotoHomepage() {
    this.router.navigateByUrl("");
    this.students = Object.keys(this.route.snapshot.data).map(
      (i) => this.route.snapshot.data[i]
    );
  }
  // edit(id: number) {
  //   this.router.navigate(["user-edit", id]);
  // }
  editPost(id: any) {
    this.router.navigate(["user-edit", id]);
  }
}
export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }
  disconnect() {}
}

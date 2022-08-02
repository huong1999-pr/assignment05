import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data/data.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"],
})
export class UserEditComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}
  email = "";
  post: any = {};
  ngOnInit(): void {
    this.email = this.activatedRoute.snapshot.params["email"];
    this.post = this.dataService.ELEMENT_DATA.find(
      (i: any) => i.position === Number(this.email)
    );
  }
}

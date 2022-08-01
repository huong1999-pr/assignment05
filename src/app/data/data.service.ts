import { Injectable } from "@angular/core";
import { Post } from "../Post";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class DataService {
  ELEMENT_DATA: Post[] = [
    {
      position: 0,
      title: "Post One",
      category: "Web Development",
      date_posted: new Date(),
      body: "Body 1",
    },
    {
      position: 1,
      title: "Post Two",
      category: "Android Development",
      date_posted: new Date(),
      body: "Body 2",
    },
    {
      position: 2,
      title: "Post Three",
      category: "IOS Development",
      date_posted: new Date(),
      body: "Body 3",
    },
    {
      position: 3,
      title: "Post Four",
      category: "Android Development",
      date_posted: new Date(),
      body: "Body 4",
    },
    {
      position: 4,
      title: "Post Five",
      category: "IOS Development",
      date_posted: new Date(),
      body: "Body 5",
    },
    {
      position: 5,
      title: "Post Six",
      category: "Web Development",
      date_posted: new Date(),
      body: "Body 6",
    },
  ];
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }
  getDataFromAPI() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}

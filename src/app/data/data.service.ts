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
  // contacts = [
  //   {
  //     id: 0,
  //     name: "Contact 001",
  //     description: "Contact 001 des",
  //     email: "c001@email.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Contact 001",
  //     description: "Contact 001 des",
  //     email: "c001@email.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Contact 002",
  //     description: "Contact 002 des",
  //     email: "c002@email.com",
  //   },
  //   {
  //     id: 3,
  //     name: "Contact 003",
  //     description: "Contact 003 des",
  //     email: "c003@email.com",
  //   },
  //   {
  //     id: 4,
  //     name: "Contact 004",
  //     description: "Contact 004 des",
  //     email: "c004@email.com",
  //   },
  //   {
  //     id: 5,
  //     name: "Contact 001",
  //     description: "Contact 001 des",
  //     email: "c001@email.com",
  //   },
  // ];
  // categories = [
  //   { value: "Web-Development", viewValue: "Web Development" },
  //   { value: "Android-Development", viewValue: "Android Development" },
  //   { value: "IOS-Development", viewValue: "IOS Development" },
  // ];
  // public getContacts(): Array<{
  //   id: any;
  //   name: any;
  //   description: any;
  //   email: any;
  // }> {
  //   return this.contacts;
  // }
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Post[]> {
    return of<Post[]>(this.ELEMENT_DATA);
  }

  // getCategories() {
  //   return this.categories;
  // }

  // addPost(data: Post) {
  //   this.ELEMENT_DATA.push(data);
  // }
  // dataLength() {
  //   return this.ELEMENT_DATA.length;
  // }
  getDataFromAPI() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}

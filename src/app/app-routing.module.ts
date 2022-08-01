import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { canActivateDemo } from "src/router-guards/canActivate";
import { canDeActivateDemo } from "src/router-guards/canDeActive";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserpageComponent } from "./userpage/userpage.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "user",
    component: UserpageComponent,
    data: [
      {
        name: "Bert Lambert",
        phone: "(936) 239-7118",
        email: "cursus.et@icloud.couk",
        country: "Costa Rica",
        numberrange: 3,
      },
      {
        name: "Gretchen Mclaughlin",
        phone: "(526) 427-0381",
        email: "ac.sem@yahoo.ca",
        country: "Austria",
        numberrange: 4,
      },
      {
        name: "Herman Arnold",
        phone: "(760) 324-1377",
        email: "sapien@yahoo.edu",
        country: "France",
        numberrange: 9,
      },
      {
        name: "Martin Fuentes",
        phone: "1-687-351-6884",
        email: "ac.feugiat@outlook.couk",
        country: "Mexico",
        numberrange: 3,
      },
      {
        name: "Nevada Byrd",
        phone: "(926) 582-4888",
        email: "porttitor.vulputate.posuere@protonmail.couk",
        country: "China",
        numberrange: 1,
      },
    ],
  },
  {
    path: "user-edit/:email",
    component: UserEditComponent,
  },
  {
    path: "shared",
    canActivate: [canActivateDemo],
    canDeactivate: [canDeActivateDemo],
    // canLoad: [],
    loadChildren: () =>
      import("./shared/shared.module").then((i) => i.SharedModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./views/test.component";

const routes: Routes = [
  {
    path: "фбББб", // <= Page URL
    component: TestComponent, // <= Page component registration
  },
  {
    path: "test", // <= Page URL
    component: TestComponent, // <= Page component registration
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from "@angular/core";
import { CreateanimaltestService } from "src/app/services/createanimaltest.service";

@Component({
  selector: "app-crate-animal",
  templateUrl: "./crate-animal.component.html",
  styleUrls: ["./crate-animal.component.css"],
})
export class CrateAnimalComponent implements OnInit {
  constructor(private _CreateanimaltestService: CreateanimaltestService) {}
  CATRes;
  AnimaltestStatus = ["ARRANGE", "ARRANGE2"];
  AnimaltestType = ["DS", "TB", "SK"];
  ngOnInit(): void {}
  createTest(createanimaltest: any) {
    console.log(createanimaltest.form.value);
    this.CATRes = this._CreateanimaltestService.getCreateAnimalTest(
      createanimaltest.value
    );
    this.CATRes
      ? alert("Create Animal Test Successful")
      : alert("Invalid Responce From Server ");
    createanimaltest.reset({
      testStatus: "ARRANGE",
      testType: "DS",
      animalGroupNumber: "",
    });
  }
}

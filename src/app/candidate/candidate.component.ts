import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CandidateService } from "../shared/candidate.service";
import { Candidate } from "../shared/candidate.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.css"],
})
export class CandidateComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    public candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit() {}

  refreshStudentsList() {
    this.candidateService.getCandidateProfile().subscribe((res) => {
      this.candidateService.candidate = res as Candidate[];
    });
  }

  onSubmit(form: NgForm) {
    // Step 1: Access form data
    const formData = form.value;

    // Step 2: Retrieve existing data from local storage
    let existingData: any[] = JSON.parse(localStorage.getItem('formData')) || [];

    try {
      // Step 3: Append new data to existing array
      existingData.push(formData);

      // Step 4: Convert to JSON and store in Local Storage
      const jsonData = JSON.stringify(existingData);
      localStorage.setItem('formData', jsonData);

      // Handle success
      this.showSucessMessage = true;
      setTimeout(() => (this.showSucessMessage = false), 10000);
      this.resetForm(form);
    } catch (error) {
      // Step 5: Handle error
      if (error instanceof DOMException && error.name === 'QuotaExceededError') {
        this.serverErrorMessages = "Local storage quota exceeded. Unable to store form data.";
      } else {
        this.serverErrorMessages = "Error storing form data in local storage.";
      }
    }

    // this.candidateService.postCandidate(form.value).subscribe(
    //   (res) => {
    //     this.showSucessMessage = true;
    //     setTimeout(() => (this.showSucessMessage = false), 10000);
    //     this.resetForm(form);
    //   },
    //   (err) => {
    //     if (err.status === 422) {
    //       this.serverErrorMessages = err.error.join("Invalid Age or Height");
    //     } else this.serverErrorMessages = "Something went wrong.";
    //   }
    // );
  }

  resetForm(form: NgForm) {
    this.candidateService.selectedCandidate = {
      name: "",
      age: null,
      qualification: "",
      height: null,
      weight: null,
      gender: "",
      category: "",
      typeOfForce: "",
    };
    form.resetForm();
    this.serverErrorMessages = "";
  }
}

import { Component, OnInit } from '@angular/core';
import { Candidate } from "../shared/candidate.model";
import { CandidateService } from "../shared/candidate.service";
import { Router } from "@angular/router";
import { CandidateComponent } from '../candidate/candidate.component';

@Component({
  selector: "app-viewcandidate",
  templateUrl: "./viewcandidate.component.html",
  styleUrls: ["./viewcandidate.component.css"],
})
export class ViewcandidateComponent implements OnInit {
  constructor(
    public candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshCandidatesList(); // Call the function to fetch candidate details
  }

  refreshCandidatesList() {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('formData');
    console.log(storedData);
    if (storedData) {
      // Parse JSON data and assign it to the candidate array
      this.candidateService.candidate = JSON.parse(storedData) as Candidate[];
    }
    // this.candidateService.getCandidateProfile().subscribe((res) => {
    //   this.candidateService.candidate = res as Candidate[];
    // });
    console.log(this.candidateService.candidate);
  }
}

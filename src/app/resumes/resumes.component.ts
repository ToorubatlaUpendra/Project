import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.css'],
})
export class ResumesComponent implements OnInit {
  jsonData: any;
  index: any = 0;
  filteredElements: any;
  searchQuery: any = '';
  isdisabled: any = false;
  filteredElement: any;
  resumeHeadings: string[] = [
    'work',
    'projects',
    'education',
    'Internship',
    'achievements',
  ];
  filteredIndex: any = [];
  indexAccumulator: any = 1;
  x: boolean = false;
  // let y : any = 0
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.data.getData().subscribe((data) => {
      this.jsonData = data;
      //this.filteredElements = data.resume
    });
  }
  nextIndex() {
    // this.index = this.jsonData.resume.findIndex((x: any) => x.id == 1)

    // if (this.filteredIndex.length > this.indexAccumulator) {
    //   this.index = this.filteredIndex[this.indexAccumulator];
    //   this.indexAccumulator = this.indexAccumulator + 1;
    // } else

    if (
      this.searchQuery != '' &&
      this.searchQuery != null &&
      this.filteredIndex.length != 0
    ) {
      let y = this.filteredIndex.findIndex((x: any) => x == this.index);

      if (this.filteredIndex[y + 1] != undefined) {
        this.index = this.filteredIndex[y + 1];
      }
    } else if (
      this.searchQuery == '' &&
      this.index < this.jsonData.resume.length - 1
    ) {
      this.index = this.index + 1;
    }
  }
  // getData() {
  //   this.data.getData().subscribe((data) => {
  //     this.jsonData1 = data
  //   })
  // }
  previousIndex() {
    // if (this.filteredIndex.length < this.indexAccumulator) {
    //   this.indexAccumulator = this.indexAccumulator - 1;
    //   this.index = this.filteredIndex[this.indexAccumulator];

    // }
    //this.indexAccumulator = this.indexAccumulator - 1;
    // if (this.indexAccumulator) {
    //   this.index = this.filteredIndex[this.indexAccumulator - 1];
    // } else

    if (this.searchQuery != '' && this.searchQuery != null) {
      let y = this.filteredIndex.findIndex((x: any) => x == this.index);
      this.index = this.filteredIndex[y - 1];
    } else if (this.index > 0) {
      this.index = this.index - 1;
    }
  }

  filteredFunction(event: KeyboardEvent) {
    //this.filteredElement = this.filteredElements
    if (event.keyCode == 13) {
      // this.filteredElement = undefined;
      this.filteredElement = this.jsonData.resume.filter((value: any) =>
        value.basics.AppliedFor.toLowerCase().includes(
          this.searchQuery.toLowerCase()
        )
      );
      if (this.filteredElement.length == 0) {
        this.x = true;
      } else {
        this.x = false;
      }

      this.isdisabled = true;
      this.filteredIndex = [];
      this.indexAccumulator = 0;
      for (let i = 0; i < this.filteredElement.length; i++) {
        // this.index = this.jsonData.resume.indexOf(this.filteredElement[i]);
        this.filteredIndex.push(this.filteredElement[i].id - 1);
      }
      this.index = this.filteredIndex[0];
    }
  }
}

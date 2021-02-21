import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataset: string[] = [];

  constructor() { }

  
    
  ngOnInit() {
  }

  getDataSets() {
    return this.dataset;
  }
  
  addData(data: string) {
    if (data === null ) {
      throw new Error('Data can not be null');
    };
    if (data === '') {
      throw new Error('Data must not be empty');
    };
    if (this.dataset.indexOf(data) >= 0 ) {
      throw new Error('Data must not be duplicate');
    };
    this.dataset.push(data);
  }
  
  removeContestants() {
    this.dataset = [];
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {
  messaage = 'Hello';
  getDetails(){
     alert('Function was called from service');
  }

  constructor() { }

}

import { CompanyDetail } from './analysis/company-details';
import { Company } from './analysis/company';

import { Injectable } from '@angular/core';


@Injectable()
export class AnalysisService {
  search :Company[] = CompanyDetail;
  searchInput : Company[];

  getDetails() { 
     
  }

  constructor() { }

}

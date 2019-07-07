import { CompanyStockDetail } from './analysis/company-details';
import { Company } from './analysis/company';
import { Injectable } from '@angular/core';


@Injectable()
export class AnalysisService {
  private stockData :Company[] = CompanyStockDetail;

  getStockDetails(companyName : string): Company { 

    if (!this.searchInput) return alert('Pleas Enter company Name ');
    
    for (let i = 0; i < this.stockData.length ; i++){
      if (this.stockData[i].companyName == companyName)
      return this.stockData[i];
    }

  }

  constructor() { }

}

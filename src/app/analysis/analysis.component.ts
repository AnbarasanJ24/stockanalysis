import { CompanyStockDetail } from './company-details';
import { Company } from './company';
import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})

export class AnalysisComponent implements OnInit {
  
  private currentCompanyDetails : Company;
  private historyData : Company;
 

  constructor(private Companyservice : AnalysisService) { }
  ngOnInit() { }

  getStockDetails(companyName : string): void{
    this.currentCompanyDetails = this.Companyservice.getStockDetails(companyName);
    
  }
  

}

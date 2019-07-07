
import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../analysis.service';
import { Company } from '../analysis/AnalysisComponent';


@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  
  private currentCompanyDetails : Company;

  getStockDetails(companyName : string): void{
    this.currentCompanyDetails = this.Companyservice.getStockDetails(companyName);
  }
 
  constructor(private Companyservice : AnalysisService) { }

  ngOnInit() { }

}

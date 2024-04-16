import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableComponent } from '../../../components/table/table.component';
import { PagetitleComponent } from '../../../components/pageTitle/page-title.component';
import { DropDownComponent } from '../../../components/drop-down/drop-down.component';
import { ButtonFieldComponent } from '../../../components/button-field/button-field.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from '../../../components/search/search.component';
import { FabButtonFieldComponent } from '../../../components/fab-button-field/fab-button-field.component';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../../services/common.service';
import { ShiftStartdatainterface } from '../../../models/shift-start-interface';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-shift-start-report',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    TableComponent,
    PagetitleComponent,
    DropDownComponent,
    ButtonFieldComponent,
    MatCardModule,
    SearchComponent,
    FabButtonFieldComponent,
    CustomInputComponent,
    MatIconModule,
  ],
  templateUrl: './shift-start-report.component.html',
  styleUrl: './shift-start-report.component.scss'
})
export class ShiftStartReportComponent implements OnInit {
  shiftstartReportForm!: FormGroup;
  stationData: any[];
  stationDefaultValue: any;
  transactionTypeData: any[];
  equipmentData: any[];

  

  constructor(private commonService: CommonService) {}

  shiftstartTableData: {
    displayedColumns: string[];
    dataSource: MatTableDataSource<ShiftStartdatainterface>;
  }[] = [
    {
      displayedColumns: [
        'shift_start_date_time',
        'lineId',
        'stationId',
        'equipmentGroupId',
        'equepmentId',
        'acquirerId',
        'operatorId',
        'terminalId',
        'agentId',
        'tom_Efo_Shift_start',
       
      ],
      dataSource: new MatTableDataSource<ShiftStartdatainterface>([
        {
          shift_start_date_time:'30-Mar-2020 10:35:29',
          lineId:'01' ,
          stationId: '0106-Moosapet',
          equipmentGroupId: 3,
          equepmentId: 1002,
          acquirerId: 4,
          operatorId: 6014,
          terminalId: '1010C2',
          agentId: 11102,
          tom_Efo_Shift_start:'0101',
         
        },
        {
          shift_start_date_time:'30-Mar-2020 10:35:29',
          lineId:'01' ,
          stationId: '0106-Moosapet',
          equipmentGroupId: 3,
          equepmentId: 1002,
          acquirerId: 4,
          operatorId: 6014,
          terminalId: '1010C2',
          agentId: 1102,
          tom_Efo_Shift_start:'0101',
        },
     
       
       
      ]),
    },
  ];

  ngOnInit(): void {
    this.stationData = this.commonService.getStationsList();
    this.transactionTypeData = this.commonService.getTransactionTypes();
    this.equipmentData = this.commonService.getEquipments();

    this.shiftstartReportForm = new FormGroup({
      firstName: new FormControl(),
    });
  }
}

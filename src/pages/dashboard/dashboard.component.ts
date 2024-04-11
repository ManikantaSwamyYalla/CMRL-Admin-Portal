import { Component } from '@angular/core';
import { MerchantWiseRevenueComponent } from '../../components/ngx-charts/merchant-wise-revenue/merchant-wise-revenue.component';
import { BarChartContainerComponent } from '../../components/ngx-charts/bar/bar-chart-container/bar-chart-container.component';
import { GaugeChartContaienrComponent } from '../../components/ngx-charts/gauge/gauge-chart-contaienr/gauge-chart-contaienr.component';
import { PieChartContainerComponent } from '../../components/ngx-charts/pie/pie-chart-container/pie-chart-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartContainerComponent,
    GaugeChartContaienrComponent,
    PieChartContainerComponent,
    MerchantWiseRevenueComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  barChartList = [
    {
      title: 'Entry Traffic',
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Entry Count',
      style: {
        backgroundColor: '#f4fcf5',
        color: '#128822',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 5000000,
        },
        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 8940000,
        },
        {
          name: '05/04/2024',
          value: 5000000,
        },
        {
          name: '06/04/2024',
          value: 7200000,
        },
      ],
    },
    {
      title: 'Exit Traffic',
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '2k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Exit Count',
      style: {
        backgroundColor: '#f0f3ff',
        color: '#3361ff',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 5000000,
        },
        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 8940000,
        },
        {
          name: '05/04/2024',
          value: 5000000,
        },
        {
          name: '06/04/2024',
          value: 7200000,
        },
      ],
    },
    {
      title: 'Revenue',
      type: 'bar',
      bottomTitle: 'All Stations',
      value: '10k',
      duration: 'Last 6 Days',
      xAxisLabel: 'Date',
      yAxisLabel: 'Revenue',
      style: {
        backgroundColor: '#fff7f5',
        color: '#ff6633',
      },
      data: [
        {
          name: '01/04/2024',
          value: 8940000,
        },
        {
          name: '02/04/2024',
          value: 8940000,
        },

        {
          name: '03/04/2024',
          value: 7200000,
        },
        {
          name: '04/04/2024',
          value: 5000000,
        },
        {
          name: '05/04/2024',
          value: 7200000,
        },
        {
          name: '06/04/2024',
          value: 5000000,
        },
      ],
    },
  ];

  gaugeChartList = {
    type: 'gauge',
    title: 'Revenue',
    total: '10k',
    style: {
      titleColor: '#ff6633',
      totalTextBackgroundColor: '#f4fcf5',
      totalTextColor: '#128822',
    },
    data: [
      {
        name: 'Cash',
        value: 7000,
        displayValue: '7k',
        style: {
          color: '#ff6633',
        },
      },
      {
        name: 'Non Cash',
        value: 3000,
        displayValue: '3k',
        style: {
          color: '#3361ff',
        },
      },
    ],
  };

  pieChartList = {
    chartType: 'stock',
    title: 'Card Sale Percentage',
    percentage: '70%',
    data: [
      {
        name: 'Sold',
        value: 7000,
      },
      {
        name: 'Remaining',
        value: 3000,
      },
    ],
  };

  merchantWiseRevenue = {
    title: 'Merchant Wise Revenue',
    data: [
      {
        name: 'Paytm',
        image: '../../../assets/img/paytm.webp',
        value: '10L',
        style: {
          backgroundColor: '#f0f3ff',
          color: '#00baf2',
        },
      },
      {
        name: 'PhonePe',
        image: '../../../assets/img/phonepe.png',
        value: '15L',
        style: {
          backgroundColor: '#ddc7fc',
          color: '#8833ff',
        },
      },
      {
        name: 'Google Pay',
        image: '../../../assets/img/gpay.webp',
        value: '5L',
        style: {
          backgroundColor: '#fff',
          color: '#3361ff',
        },
      },
    ],
  };
}
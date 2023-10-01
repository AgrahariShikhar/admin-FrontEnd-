import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataService } from '../service/data.service';
import { Data } from '../model/Data';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent {
  usersData: Data[] = [];
  value: string = '';
  noSelect = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllTasksOfUser().subscribe((res) => {
      this.usersData = res;
     // console.log(res);
 
    });
  }

  refresh() {
    window.location.reload();
  }

  getbyStartYear(value: any) {
    console.log(value);

    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.start_year == value;
      
      });
    });
  }

  getbyEndYear(value: any) {
    console.log(value);

    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.end_year == value;
      });
    });
  }

  getbyTopics(value: any) {
    console.log(value);

    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.topic?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }

  getbySectors(value: any) {
    console.log(value);

    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.sector?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }

  getByRegion(value: any) {
    console.log(value);

    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.region?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
  getByPestle(value: any) {
    console.log(value);
    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.pestle?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
  getBySource(value: any) {
    console.log(value);
    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.source?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
  getBySwot(value: any) {
    console.log(value);
    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.swot?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
  getByCountry(value: any) {
    console.log(value);
    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.country?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
  getByCity(value: any) {
    console.log(value);
    this.dataService.getAllTasksOfUser().subscribe((res: Data[]) => {
      this.usersData = res.filter((data) => {
        return data.city?.toLowerCase().startsWith(value.toLowerCase());
      });
    });
  }
}

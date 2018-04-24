import { Injectable } from '@angular/core';
import{} from '@rxjs/'
import { Subject } from 'rxjs';
@Injectable()
export class AdmindashboardService {
  public IsDashBoardVisible:Subject<boolean> = new Subject<boolean>();
  constructor() { 

    
  }

}

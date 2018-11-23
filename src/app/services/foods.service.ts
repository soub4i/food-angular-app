import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService   {

  resource: string = 'foods';

  
  constructor(private api: ApiService) {

    
  }

  public getAll(): Observable<any>{
    return this.api.get(this.resource);
  }

  public create(data: any): Observable<any> {
    return this.api
      .post(this.resource, data);
  }


}

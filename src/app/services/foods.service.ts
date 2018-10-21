import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodsService   {

  constructor(private api:ApiService){

    this.api.resource = 'foods';

  }


  getFoods(){
    return this.api.getAll();
  }

  getFoodById(id:any){
    return this.api.getById(id);
  }




}

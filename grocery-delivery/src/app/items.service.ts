import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  name: string;
  type: string;
  image: string;
  price: number;
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private _total = new BehaviorSubject<number>(0);
  total = this._total.asObservable();
  item: any;
  url: string ='/assets/json/item.json';

  constructor(private http: HttpClient) {
    this.getData().subscribe(result=>{
      this.item=result;
    });
   }

    getData(): Observable<Item[]>{
      return this.http.get<Item[]>(this.url);
    }

  getTotal(item: Item): number {
     let initalTotal = 0;
    this.item.forEach((element:Item) => {
      if(element.name==item.name){
        element.quantity=item.quantity;
      }
      initalTotal = initalTotal + element.quantity;
    });
    return initalTotal;
  }

  addToCart(item: Item) {
    let itemCount =this.getTotal(item);
    this._total.next(itemCount);
  }

  removeFromCart(item: Item) {
    let itemCount =this.getTotal(item);
    this._total.next(itemCount);
  }

}

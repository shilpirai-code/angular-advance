import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from "../item/item.component";
import { Item, ItemsService } from '../items.service';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [RouterModule, ItemComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent implements OnInit {
  items!: Item[];
  fruits: Item[] | undefined;

  constructor(public itemService: ItemsService) {
   
  }
  ngOnInit(): void {
    this.itemService.getData().subscribe(result=>{
      this.items=result;
      this.filterFruits(this.items);
    });
  }

  filterFruits(items: Item[]) {
    this.fruits = this.items.filter(e => e.type == 'fruit');
  }
}

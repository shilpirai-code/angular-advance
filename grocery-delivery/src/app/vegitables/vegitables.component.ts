import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-vegitables',
  standalone: true,
  imports:  [RouterModule, ItemComponent],
  templateUrl: './vegitables.component.html',
  styleUrl: './vegitables.component.scss'
})
export class VegitablesComponent implements OnInit {
  items: Item[];
  vegetables: Item[] | undefined;

  constructor(itemService: ItemsService) {
    this.items = itemService.item;
  }
  ngOnInit(): void {
    this.filterVegetables(this.items);
  }

  filterVegetables(items: Item[]) {
    this.vegetables = this.items.filter(e => e.type == 'vegetable');
  }
}

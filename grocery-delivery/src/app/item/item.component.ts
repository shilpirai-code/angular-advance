import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})

export class ItemComponent implements OnInit {

  @Input() items: Item[] | undefined;
  total!: any;
  subscription!: Subscription;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit() {
    this.subscription = this.itemService.total.subscribe(count => this.total = count)
  }

  addItem(item: Item) {
    item.quantity++;
    this.itemService.addToCart(item);
  }

  removeItem(item: Item){
    if (item.quantity > 0)
      item.quantity--;
    this.itemService.removeFromCart(item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}



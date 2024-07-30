import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Item, ItemsService } from '../items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items!: Item[];
  total =0;
  subscription!: Subscription;

  constructor(private itemService: ItemsService) {
  }

  ngOnInit() {
    this.subscription = this.itemService.total.subscribe(count => this.total = count)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { CardsService } from 'src/app/cards/cards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  availableDecks?: any;
  
  constructor(private cardsService: CardsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.availableDecks = this.cardsService.availableDecks;
  }

  navigateTo(id: string) {
    this.router.navigate(['/practice', id], { relativeTo: this.route });
  }
}

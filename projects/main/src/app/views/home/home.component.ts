import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  user?: User | null;

  @Output()
  appSignOut = new EventEmitter<never>();

  constructor() {}

  ngOnInit(): void {}

  onClickSignout(): void {
    this.appSignOut.emit();
  }
}

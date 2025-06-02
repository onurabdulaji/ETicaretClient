import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageTypes,
  Positions,
} from '../../../services/admin/alertify';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  constructor(private alertify: AlertifyService) {}
  ngOnInit(): void {}

  m() {
    this.alertify.message('Merhaba', {
      messageType: MessageTypes.Success,
      delay: 5,
      dismissOthers: false,
      position: Positions.TopRight,
    });
  }
  d() {
    this.alertify.dismiss();
  }
}

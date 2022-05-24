import { Component, OnInit } from '@angular/core';
import { messages } from '../services/models/message.interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  displayedColumns: string[] = ['senderEmail', 'content'];
  messages = messages;

  constructor() { }

  ngOnInit(): void {
  }

}

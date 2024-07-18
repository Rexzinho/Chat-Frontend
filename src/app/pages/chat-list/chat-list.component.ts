import { Component, OnInit } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: 'chat-list.component.html',
    styleUrl: 'chat-list.component.css'
})
export class ChatList implements OnInit{
    salas:any = [];
    async getSalas(){
        const resp = await fetch("https://62746a68-e9bd-47a4-86c4-a2313a3ac6cd.mock.pstmn.io/salas");
        const data = await resp.json();
        this.salas = data.resp;
    }
    ngOnInit(){
        this.getSalas();
    }
}
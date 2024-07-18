import { Component, inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css'
})
export class Home{
    texto = "AGUA"
    async getBook(){
        const resp = await fetch("https://62746a68-e9bd-47a4-86c4-a2313a3ac6cd.mock.pstmn.io/salas");
        const data = await resp.json();
        this.texto = data.resp[0].nome;
    }
}
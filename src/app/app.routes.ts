import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { ChatList } from './pages/chat-list/chat-list.component';
import { Chat } from './pages/chat/chat.component';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'chat-list', component: ChatList},
    {path: 'chat', component: Chat}
];

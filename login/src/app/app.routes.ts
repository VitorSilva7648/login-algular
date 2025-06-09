import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Payment } from './pages/payment/payment';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "register", component: Register},
    {path:"payment", component: Payment},
];

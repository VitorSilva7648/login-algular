import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cad } from './pages/cad/cad';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "cad", component: Cad}
];

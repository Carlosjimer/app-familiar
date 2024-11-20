import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { MenuComponent } from './menu/menu.component';
import { CitasComponent } from './citas/citas.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'compra', component: CompraComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'citas', component: CitasComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompraComponent } from './compra/compra.component';
import { MenuComponent } from './menu/menu.component';
import { CitasComponent } from './citas/citas.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, /*HomeComponent, CompraComponent, MenuComponent, CitasComponent,*/ RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-familiar';
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarBootstrapComponent } from './navbar-bootstrap/navbar-bootstrap.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarBootstrapComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
      },
      {
        path: 'my/orders',
        component: MyOrdersComponent,
      },
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

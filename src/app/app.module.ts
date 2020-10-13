import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponet } from './products/product-list-component';
import { ConvertToSpace } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star-component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponet,
    ConvertToSpace,
    StarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from "./app.component"
import { AddressFormComponent } from "./address-form/address-form.component"

@NgModule({
    declarations: [AppComponent, AddressFormComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

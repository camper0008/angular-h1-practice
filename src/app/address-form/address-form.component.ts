import { Component } from "@angular/core"
import { Observable, of } from "rxjs"
import { AddressFormService } from "./address-form.service"
import { Postcode } from "./Postcode"

@Component({
    selector: "app-address-form",
    templateUrl: "./address-form.component.html",
    providers: [AddressFormService],
    styleUrls: ["./address-form.component.scss"],
})
export class AddressFormComponent {
    currentPostcode: Postcode[] = []
    postcodes: Postcode[] = []

    constructor(private addressFormService: AddressFormService) {}

    ngOnInit() {
        this.getPostcodes()
    }

    getPostcodes(): void {
        this.addressFormService
            .getPostcodes()
            .subscribe((postcodes) => (this.postcodes = postcodes))
    }

    getPostcode(postcode: string): void {
        if (postcode && postcode.length == 4 && parseInt(postcode)) {
            this.addressFormService
                .getCurrentPostcode(postcode)
                .subscribe(
                    (currentPostcode) =>
                        (this.currentPostcode = currentPostcode)
                )
        } else {
            this.currentPostcode = []
        }
    }
}

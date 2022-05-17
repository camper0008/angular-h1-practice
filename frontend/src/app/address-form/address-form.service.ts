import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { Postcode, Municipality } from "./Postcode"

@Injectable({
    providedIn: "root",
})
export class AddressFormService {
    private postcodesUrl = "https://api.dataforsyningen.dk/postnumre" // URL to web api

    constructor(private http: HttpClient) {}

    getPostcodes(): Observable<Postcode[]> {
        return this.http.get<Postcode[]>(this.postcodesUrl)
    }

    getCurrentPostcode(postcode: string): Observable<Postcode[]> {
        return this.http.get<Postcode[]>(`${this.postcodesUrl}?nr=${postcode}`)
    }
}

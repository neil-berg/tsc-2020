import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lon: number;
    };
    color: string = 'blue';
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${this.companyName}</h1>
                <h2>Catchphrase: ${this.catchPhrase}</h2>
            </div>
        `;
    }
}

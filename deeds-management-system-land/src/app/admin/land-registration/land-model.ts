export class Land {
    public propertyID: number;
    public country: string;
    public address: string;
    public postalCode: string;
    public state: string;
    public propertyType: string;
    public marketValue: number;
    public nameOfOwner: string;
    public email: string;

    constructor(propertyID: number, 
                country: string, 
                address: string,
                postalCode: string,
                state: string,
                propertyType: string,
                marketValue: number,
                nameOfOwner: string, //full name of owner, name and surname
                email: string) {
        this.propertyID = propertyID;
        this.country = country;
        this.address = address;
        this.postalCode = postalCode;
        this.state = state;
        this.propertyType = propertyType;
        this.marketValue = marketValue;
        this.nameOfOwner = nameOfOwner;
        this.email = email;
    }
}
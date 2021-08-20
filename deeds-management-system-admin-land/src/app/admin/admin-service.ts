import { Subject } from "rxjs";

export class AdminService {
    validAdmin = false;
    counter = 0;
    
    admins = [
        {
            adminUsername: "Admin",
            adminPassword: "Password1"
        }
    ]; //this will hold an array of objects containing the username and password of every admin

    validateAdmin(username: string, password: string): boolean {
        let found = false;
        for (let x = 0; x < this.admins.length; x++){
            if (this.admins[x].adminUsername == username){
                if (this.admins[x].adminPassword == password) {
                    found = true;
                    this.validAdmin = true;
                }
            }
        }
        return found;
    }

    getValidity(): boolean {
        return this.validAdmin;
    }
}
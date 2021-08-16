import { Subject } from "rxjs";
import { Land } from "./land-model";

export class LandService {
    propTypes: string[] = [
        "Agricultural",
        "Commercial",
        "Industrial",
        "Mixed-Use",
        "Resedential",
        "Special-Purpose"
    ];
    
    lands: Land[] = [
        new Land(
            1,
            "Congo",
            "122 Banalia Street, Banalia Suburb, Banalia",
            "00243",
            "Tshopo",
            "Agricultural",
            20000,
            "Felix Tshisekedi",
            "f.tshisekedi@gmail.com"
        )
    ]; 

    landsChanged = new Subject<Land[]>();

    getPropTypes(): string[] {
        return this.propTypes;
    }

    getNumLands(): number {
        return this.lands.length;
    }

    addNewLand(land: Land) {
        this.lands.push(land);
        this.landsChanged.next(this.lands.slice());
    }

    getLand(i: number): Land {
        return this.lands[i];
    }

    getLands(): Land[] {
        return this.lands.slice();
    }

    updateLand(index: number, land: Land) {
        this.lands[index] = land;
        this.landsChanged.next(this.lands.slice());
    }
}
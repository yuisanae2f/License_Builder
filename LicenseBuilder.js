
import { cState } from "./State.js";
import { cPermission } from "./Permission.js";
import { cCondition } from "./Condition.js";
import { cLimit } from "./Limit.js";

export class iLicenseBuilder {
    /**
     * 
     * @param {string} year 
     * @param {string} owner 
     * @param {string} object 
     * 
     */
    constructor(year, owner, object) {
        this.year = year;
        this.owner = owner;
        this.object = object;
    }

    /**
     * 
     * @param {HTMLElement} Console 
     * @returns {cState}
     */
    LICENSE(Console) { return cState_NO_IMP_FOUND; }

    /**
     * @returns {cPermission[]}
     */
    PERMISSION() { return []; }

    /**
     * 
     * @returns { cCondition[] }
     */
    CONDITION() { return []; }

    /**
     * 
     * @returns { cLimit[] }
     */
    LIMIT() { return []; }
}


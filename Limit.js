const eLimit = (function() {
    let privateVar = 0; // static variable

    return {
        get: function() {
            return privateVar++;
        }
    };
})();

export class cLimit {
    /**
     * @param {string} desc
     */
    constructor(desc) {
        this.id = eLimit.get();
        this.desc = desc;        
    }
}

export const cLimit_TRADEMART_USE = new cLimit("Trademark Use");
export const cLimit_LIABILITY = new cLimit("Liability");
export const cLimit_WARRANTY = new cLimit("Warranty");
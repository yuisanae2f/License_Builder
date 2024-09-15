const eCond = (function() {
    let privateVar = 0; // static variable

    return {
        get: function() {
            return privateVar++;
        }
    };
})();

export class cCondition {
    /**
     * @param {string} desc
     */
    constructor(desc) {
        this.id = eCond.get();
        this.desc = desc;        
    }
}

export const cCondition_LICENSE_AND_COPYRIGHT_NOTICE = new cCondition("License and copyright notice");
export const cCondition_STATE_CHANGES = new cCondition("State changes");
export const cCondition_DISCLOSE_SOURCE = new cCondition("Disclose source");
export const cCondition_SAME_LICENSE = new cCondition("Same license");
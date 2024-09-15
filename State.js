const eState = (function() {
    let privateVar = 0; // static variable

    return {
        get: function() {
            return privateVar++;
        }
    };
})();

export class cState {
    /**
     * @param {string} desc 
     */
    constructor(desc) {
        this.id = eState.get();
        this.desc = desc;
    }
};

export const cState_ALL_GOOD = new cState("The operation went successfully.");
export const cState_NO_IMP_FOUND = new cState("This operation is not implemented.");
export const cState_REF_NULL = new cState("Found the arguement is null or undefined.");

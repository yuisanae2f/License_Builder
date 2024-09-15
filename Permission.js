const ePermission = (function() {
    let privateVar = 0; // static variable

    return {
        get: function() {
            return privateVar++;
        }
    };
})();

export class cPermission {
    /**
     * @param {string} desc
     */
    constructor(desc) {
        this.id = ePermission.get();
        this.desc = desc;        
    }
}

export const cPermission_COMMERCIAL_USE = new cPermission("Commercial Use");
export const cPermission_MODIFICATION = new cPermission("Modification");
export const cPermission_DISTRIBUTION = new cPermission("Distribution");
export const cPermission_PATENT_USE = new cPermission("Patent Use");
export const cPermission_PRIVATE_USE = new cPermission("Private Use");

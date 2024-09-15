
import { cApacheLicenseV2_0 } from "./License/Apache_License_v2_0.js";
import { iLicenseBuilder } from "./LicenseBuilder.js";
import { cState_NO_IMP_FOUND } from "./State.js";

/**
 * @param {string} OptTemplateValue
 * @param {string} Year
 * @param {string} Owner
 * @param {string} Object
 * @returns {void}
 */
export function Main(OptTemplateValue, Year, Owner, Object) {
    function OnChangeGlobal() {
        return Main(
            document.getElementById("options").value,
            document.getElementById("Year").value,
            document.getElementById("Owner").value,
            document.getElementById("Object").value
        )
    }

    if(document.getElementById("options")) {
        document.getElementById("options").addEventListener("change", OnChangeGlobal);
    }

    if(document.getElementById("Year")) {
        document.getElementById("Year").value = Year;
        document.getElementById("Year").addEventListener("change", OnChangeGlobal);
    }
    if(document.getElementById("Owner")) {
        document.getElementById("Owner").value = Owner;
        document.getElementById("Owner").addEventListener("change", OnChangeGlobal);
    }
    if(document.getElementById("Object")) {
        document.getElementById("Object").value = Object;
        document.getElementById("Object").addEventListener("change", OnChangeGlobal);
    }

    

    let license = new iLicenseBuilder("", "", "");
    switch(OptTemplateValue) {
        case "Apache License 2.0":
            license = new cApacheLicenseV2_0(Year, Owner, Object);
            break;
        default:
            console.log("On main code(%d): %s", cState_NO_IMP_FOUND.id, cState_NO_IMP_FOUND.desc);
            return;
    }

    const console_permission = document.getElementById("summary_permission");
    console_permission.innerHTML = "";
    for(const i of license.PERMISSION()) {
        console_permission.innerHTML += `<li>${i.desc}</li>`;
    }

    const console_limit = document.getElementById("summary_limit");
    console_limit.innerHTML = "";
    for(const i of license.LIMIT()) {
        console_limit.innerHTML += `<li>${i.desc}</li>`;
    }

    const console_cond = document.getElementById("summary_cond");
    console_cond.innerHTML = "";
    for (const i of license.CONDITION()) {
        console_cond.innerHTML += `<li>${i.desc}</li>`;
    }

    const console_license = document.getElementById("license");
    const console_license_rtn = license.LICENSE(console_license);
    console.log("On LICENSE code(%d): %s", console_license_rtn.id, console_license_rtn.desc);

    document.getElementById("_url").innerHTML = window.location.href.split('?')[0] 
    + `?prm_template=${OptTemplateValue}&prm_year=${Year}&prm_owner=${Owner}&prm_obj=${Object}&prm_hideIStream=1`;
}
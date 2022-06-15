import { PersonalListTemplate, MainLayout } from "../templates.js";
import { BaseStyles, PersonalStyles } from "../styles.js";

export async function PersonalListShow() {
    const personelList = preparePersonelList();
    const layoutData = {
        "Body": await PersonalListTemplate(),
        "Navigation": '',
        "Styles": [PersonalStyles(), BaseStyles()].join("\n"),
    };

    function preparePersonelList () {
        
    }

    return MainLayout(layoutData);
}

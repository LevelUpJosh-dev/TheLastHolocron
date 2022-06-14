import { PersonalTemplate, MainLayout } from "../templates.js";
import { BaseStyles, PersonalStyles } from "../styles.js";

export async function PersonalShow(query) {
    const layoutData = {
        "Body": await PersonalTemplate(query.name),
        "Navigation": '',
        "Styles": [PersonalStyles(), BaseStyles()].join("\n"),
    };

    return MainLayout(layoutData);
}

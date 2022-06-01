import { MainLayout, HomeTemplate, Navigation } from "../templates.js";

export async function HomeShow () {
    const layoutData = {
        "Body": await HomeTemplate(),
        "Navigation": await Navigation()
    }

    return MainLayout(layoutData);
}
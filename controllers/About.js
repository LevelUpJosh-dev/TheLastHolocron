import { MainLayout, AboutTemplate, Navigation } from "../templates.js";

export async function AboutShow () {
    const layoutData = {
        "Body": await AboutTemplate(),
        "Navigation": await Navigation()
    }

    return MainLayout(layoutData);
}
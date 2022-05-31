import { MainLayout, HomeTemplate, Navigation } from "../templates.js";

export async function HomeShow () {
    const layoutData = {
        "PageLanguage": 'en',
        "PageTitle": 'The Last Holocron',
        "Body": await HomeTemplate(),
        "Navigation": await Navigation()
    }

    return MainLayout(layoutData);
}
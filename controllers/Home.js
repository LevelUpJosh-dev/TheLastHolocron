import { MainLayout, HomeTemplate } from "../templates.js";

export function HomeShow () {
    const data = {
        PageLanguage: 'en',
        PageTitle: 'The Last Holocron',
        body: HomeTemplate()
    }

    const template = MainLayout(data);

    return new Response(template, {
        status: 200,
        headers: {
            "content-type": "text/html",
        },
    });
}
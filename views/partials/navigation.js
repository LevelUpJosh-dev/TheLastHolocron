import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";

export default async () => {
    const data = await loadJsonFile("views/partials/navigation.json");

    return `
        <div class="navbar navbar-expand-lg text-white ${data.DarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}"></div>
    `
}
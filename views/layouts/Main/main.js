import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts";
import { BaseStyles } from "../../../styles.js";

export default async (data) => {
  const LayoutData = await loadJsonFile("views/layouts/Main/main.json");
  const { Language, Title } = LayoutData;

  return `
    <!DOCTYPE html>
        <html lang="${Language}">
            <head>
                <link rel="icon" href="logo.jpg">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <title>${Title}</title>
                <style>
                    ${BaseStyles()}
                </style>
            </head>
            ${data.Navigation}
            <body>
                ${data.Body}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> 
            </body>
        </html>
    `;
};
